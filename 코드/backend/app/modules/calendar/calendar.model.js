/**
 * Calendar Model
 * 학원 일정(이벤트) 관리 데이터 모델
 */

const calendarModel = {};
const db = database();

/**
 * 모든 일정 조회
 */
calendarModel.getAllEvents = async () => {
  try {
    const events = await db('wb_calendar')
      .select('*')
      .where('cal_status', '=', 'Y')
      .orderBy('cal_date', 'asc');
    
    return events || [];
  } catch (e) {
    console.error('getAllEvents error:', e);
    return null;
  }
};

/**
 * 특정 날짜 범위의 일정 조회
 */
calendarModel.getEventsByDateRange = async (startDate, endDate) => {
  try {
    const events = await db('wb_calendar')
      .select('*')
      .where('cal_status', '=', 'Y')
      .whereBetween('cal_date', [startDate, endDate])
      .orderBy('cal_date', 'asc');
    
    return events || [];
  } catch (e) {
    console.error('getEventsByDateRange error:', e);
    return null;
  }
};

/**
 * 특정 날짜의 일정 조회 (오늘의 특이사항용)
 */
calendarModel.getEventsByDate = async (date) => {
  try {
    const events = await db('wb_calendar')
      .select('*')
      .where('cal_status', '=', 'Y')
      .where('cal_date', '=', date)
      .orderBy('cal_created_at', 'desc');
    
    return events || [];
  } catch (e) {
    console.error('getEventsByDate error:', e);
    return null;
  }
};

/**
 * 일정 생성
 */
calendarModel.createEvent = async (eventData) => {
  try {
    const insertResult = await db('wb_calendar').insert({
      cal_branch: eventData.cal_branch,        // 지점: gamil, main, self-study
      cal_date: eventData.cal_date,            // 날짜: YYYY-MM-DD
        cal_end_date: eventData.cal_end_date || eventData.cal_date, // 종료 날짜: YYYY-MM-DD
        cal_title: eventData.cal_title,          // 일정 제목
        cal_content: eventData.cal_content,      // 특이사항 내용
      cal_status: 'Y',
      cal_created_at: db.fn.now(),
      cal_updated_at: db.fn.now()
    });

    // insertResult는 MySQL의 경우 [insertId] 형태일 수 있으므로 확실히 생성된 레코드를 조회해서 반환
    const insertedId = Array.isArray(insertResult) ? insertResult[0] : insertResult;
    if (!insertedId) return null;

    const created = await db('wb_calendar').select('*').where('cal_id', insertedId).first();
    return created || null;
  } catch (e) {
    console.error('createEvent error:', e);
    return null;
  }
};

/**
 * 일정 수정
 */
calendarModel.updateEvent = async (calId, eventData) => {
  try {
    await db('wb_calendar')
      .where('cal_id', '=', calId)
      .update({
        cal_branch: eventData.cal_branch,
        cal_date: eventData.cal_date,
          cal_end_date: eventData.cal_end_date || eventData.cal_date,
          cal_title: eventData.cal_title,
          cal_content: eventData.cal_content,
        cal_updated_at: db.fn.now()
      });
    
    return true;
  } catch (e) {
    console.error('updateEvent error:', e);
    return false;
  }
};

/**
 * 일정 삭제 (소프트 삭제)
 */
calendarModel.deleteEvent = async (calId) => {
  try {
    await db('wb_calendar')
      .where('cal_id', '=', calId)
      .update({
        cal_status: 'N',
        cal_updated_at: db.fn.now()
      });
    
    return true;
  } catch (e) {
    console.error('deleteEvent error:', e);
    return false;
  }
};

/**
 * 특정 일정 조회
 */
calendarModel.getEventById = async (calId) => {
  try {
    const event = await db('wb_calendar')
      .select('*')
      .where('cal_id', '=', calId)
      .where('cal_status', '=', 'Y')
      .first();
    
    return event || null;
  } catch (e) {
    console.error('getEventById error:', e);
    return null;
  }
};

module.exports = calendarModel;

// 테이블이 존재하지 않을 경우 생성하는 유틸 (수동 실행 또는 서버 스타트 시 호출 가능)
calendarModel.ensureTableExists = async () => {
  try {
    const exists = await db.schema.hasTable('wb_calendar');
    if (!exists) {
      await db.schema.createTable('wb_calendar', function(table) {
        table.increments('cal_id').unsigned().primary().comment('일정 PK');
        table.enu('cal_status', ['Y','N']).notNullable().defaultTo('Y').comment('Y:정상 N:삭제');
        table.string('cal_branch', 50).notNullable().comment('지점: gamil, main, self-study');
        table.date('cal_date').notNullable().comment('일정 날짜');
        table.date('cal_end_date').notNullable().comment('일정 종료 날짜');
        table.string('cal_title', 255).notNullable().comment('일정 제목');
        table.text('cal_content').nullable().comment('특이사항 상세 내용');
        table.dateTime('cal_created_at').notNullable().defaultTo(db.fn.now());
        table.dateTime('cal_updated_at').notNullable().defaultTo(db.fn.now());
        table.index(['cal_date'], 'idx_date');
        table.index(['cal_branch'], 'idx_branch');
      });
      console.log('wb_calendar table created');
    } else {
      // ensure cal_end_date exists
      const hasEnd = await db.schema.hasColumn('wb_calendar', 'cal_end_date');
      if (!hasEnd) {
        await db.schema.alterTable('wb_calendar', function(table) {
          table.date('cal_end_date').notNullable().defaultTo(db.raw("CURRENT_DATE"));
        });
        console.log('wb_calendar cal_end_date column added');
      } else {
        console.log('wb_calendar table already exists');
      }
    }
    return true;
  } catch (e) {
    console.error('ensureTableExists error:', e);
    return false;
  }
};
