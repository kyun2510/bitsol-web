const path = require('path');
// 환경변수 로드
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const db = require(path.join(__dirname, '..', 'app', 'core', 'db.js'));

(async () => {
  try {
    const exists = await db.schema.hasTable('wb_calendar');
    if (!exists) {
      await db.schema.createTable('wb_calendar', function(table) {
        table.increments('cal_id').unsigned().primary().comment('일정 PK');
        table.enu('cal_status', ['Y','N']).notNullable().defaultTo('Y').comment('Y:정상 N:삭제');
        table.string('cal_branch', 50).notNullable().comment('지점: gamil, main, self-study');
        table.date('cal_date').notNullable().comment('일정 날짜');
        table.string('cal_title', 255).notNullable().comment('일정 제목');
        table.text('cal_content').nullable().comment('특이사항 상세 내용');
        table.dateTime('cal_created_at').notNullable().defaultTo(db.fn.now());
        table.dateTime('cal_updated_at').notNullable().defaultTo(db.fn.now());
        table.index(['cal_date'], 'idx_date');
        table.index(['cal_branch'], 'idx_branch');
      });
      console.log('wb_calendar table created');
    } else {
      console.log('wb_calendar table already exists');
    }
    process.exit(0);
  } catch (e) {
    console.error('create_wb_calendar error:', e);
    process.exit(1);
  }
})();
