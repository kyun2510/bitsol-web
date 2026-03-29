/**
 * Calendar Controller
 * 학원 일정(이벤트) 관리 컨트롤러
 */

const calendarController = {};
const calendarModel = loadModule('calendar', 'model');

/**
 * 모든 일정 조회
 */
calendarController.getAllEvents = async (req, res) => {
  try {
    const events = await calendarModel.getAllEvents();
    
    if (!events) {
      return res.status(500).json({ error: '일정 조회 실패' });
    }
    // normalize cal_date to YYYY-MM-DD strings to avoid timezone shifts on client
    const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
    const normalized = events.map(ev => {
      const d = ev.cal_date;
      let dateStr = null;
      if (typeof d === 'string') {
        dateStr = d.split('T')[0];
      } else if (d instanceof Date) {
        // Use local date components to avoid UTC shift
        dateStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
      } else if (d && d.toString) {
        const tmp = new Date(d);
        dateStr = `${tmp.getFullYear()}-${pad(tmp.getMonth() + 1)}-${pad(tmp.getDate())}`;
      }
      // also normalize cal_end_date if present
      let endStr = null;
      if (ev.cal_end_date) {
        const e = ev.cal_end_date;
        if (typeof e === 'string') endStr = e.split('T')[0];
        else if (e instanceof Date) endStr = `${e.getFullYear()}-${pad(e.getMonth() + 1)}-${pad(e.getDate())}`;
        else {
          const tmp2 = new Date(e);
          endStr = `${tmp2.getFullYear()}-${pad(tmp2.getMonth() + 1)}-${pad(tmp2.getDate())}`;
        }
      }
      return { ...ev, cal_date: dateStr, cal_end_date: endStr };
    });

    return res.status(200).json(normalized);
  } catch (error) {
    console.error('getAllEvents error:', error);
    return res.status(500).json({ error: '일정 조회 중 오류 발생' });
  }
};

/**
 * 특정 날짜 범위의 일정 조회
 */
calendarController.getEventsByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    if (!startDate || !endDate) {
      return res.status(400).json({ error: '시작일과 종료일이 필요합니다' });
    }
    
    const events = await calendarModel.getEventsByDateRange(startDate, endDate);

    if (!events) {
      return res.status(500).json({ error: '일정 조회 실패' });
    }

    const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);
    const normalized = events.map(ev => {
      const d = ev.cal_date;
      let dateStr = null;
      if (typeof d === 'string') {
        dateStr = d.split('T')[0];
      } else if (d instanceof Date) {
        dateStr = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
      } else if (d && d.toString) {
        const tmp = new Date(d);
        dateStr = `${tmp.getFullYear()}-${pad2(tmp.getMonth() + 1)}-${pad2(tmp.getDate())}`;
      }
      let endStr = null;
      if (ev.cal_end_date) {
        const e = ev.cal_end_date;
        if (typeof e === 'string') endStr = e.split('T')[0];
        else if (e instanceof Date) endStr = `${e.getFullYear()}-${pad2(e.getMonth() + 1)}-${pad2(e.getDate())}`;
        else {
          const tmp2 = new Date(e);
          endStr = `${tmp2.getFullYear()}-${pad2(tmp2.getMonth() + 1)}-${pad2(tmp2.getDate())}`;
        }
      }
      return { ...ev, cal_date: dateStr, cal_end_date: endStr };
    });

    return res.status(200).json(normalized);
  } catch (error) {
    console.error('getEventsByDateRange error:', error);
    return res.status(500).json({ error: '일정 조회 중 오류 발생' });
  }
};

/**
 * 특정 날짜의 일정 조회
 */
calendarController.getEventsByDate = async (req, res) => {
  try {
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({ error: '날짜가 필요합니다' });
    }
    
    const events = await calendarModel.getEventsByDate(date);

    if (!events) {
      return res.status(500).json({ error: '일정 조회 실패' });
    }

    const pad3 = (n) => (n < 10 ? `0${n}` : `${n}`);
    const normalized = events.map(ev => {
      const d = ev.cal_date;
      let dateStr = null;
      if (typeof d === 'string') {
        dateStr = d.split('T')[0];
      } else if (d instanceof Date) {
        dateStr = `${d.getFullYear()}-${pad3(d.getMonth() + 1)}-${pad3(d.getDate())}`;
      } else if (d && d.toString) {
        const tmp = new Date(d);
        dateStr = `${tmp.getFullYear()}-${pad3(tmp.getMonth() + 1)}-${pad3(tmp.getDate())}`;
      }
      let endStr = null;
      if (ev.cal_end_date) {
        const e = ev.cal_end_date;
        if (typeof e === 'string') endStr = e.split('T')[0];
        else if (e instanceof Date) endStr = `${e.getFullYear()}-${pad3(e.getMonth() + 1)}-${pad3(e.getDate())}`;
        else {
          const tmp2 = new Date(e);
          endStr = `${tmp2.getFullYear()}-${pad3(tmp2.getMonth() + 1)}-${pad3(tmp2.getDate())}`;
        }
      }
      return { ...ev, cal_date: dateStr, cal_end_date: endStr };
    });

    return res.status(200).json(normalized);
  } catch (error) {
    console.error('getEventsByDate error:', error);
    return res.status(500).json({ error: '일정 조회 중 오류 발생' });
  }
};

/**
 * 일정 생성
 */
calendarController.createEvent = async (req, res) => {
  try {
    // Accept both forms coming from frontend: either cal_* or shorthand keys
    const cal_branch = req.body.cal_branch || req.body.branch;
    const cal_date = req.body.cal_date || req.body.date;
    const cal_title = req.body.cal_title || req.body.title;
    const cal_content = req.body.cal_content || req.body.content || '';

    console.log('createEvent request body:', req.body);

    const allowedBranches = ['gamil', 'main', 'self-study', 'all'];

    if (!cal_branch || !cal_date || !cal_title) {
      return res.status(400).json({ error: '필수 정보가 누락되었습니다' });
    }

    if (!allowedBranches.includes(cal_branch)) {
      return res.status(400).json({ error: '지점명(cal_branch)이 유효하지 않습니다' });
    }

    // 날짜 포맷 정규화: YYYY-MM-DD 형태만 허용
    const dateOnly = (typeof cal_date === 'string' && cal_date.split('T')[0]) || cal_date;
    const endOnly = (typeof req.body.cal_end_date === 'string' && req.body.cal_end_date.split('T')[0]) || req.body.cal_end_date || dateOnly;

    const eventData = {
      cal_branch,
      cal_date: dateOnly,
      cal_end_date: endOnly,
      cal_title,
      cal_content
    };

    const result = await calendarModel.createEvent(eventData);

    if (!result) {
      console.error('createEvent: model returned null');
      return res.status(500).json({ error: '일정 생성 실패' });
    }

    // Ensure returned event's cal_date and cal_end_date match the original payload (YYYY-MM-DD)
    result.cal_date = dateOnly;
    result.cal_end_date = eventData.cal_end_date || dateOnly;

    return res.status(201).json({ 
      message: '일정이 생성되었습니다',
      event: result
    });
  } catch (error) {
    console.error('createEvent error:', error);
    return res.status(500).json({ error: '일정 생성 중 오류 발생' });
  }
};

/**
 * 일정 수정
 */
calendarController.updateEvent = async (req, res) => {
  try {
    const { calId } = req.params;
    const cal_branch = req.body.cal_branch || req.body.branch;
    const cal_date = req.body.cal_date || req.body.date;
    const cal_title = req.body.cal_title || req.body.title;
    const cal_content = req.body.cal_content || req.body.content || '';
    
    if (!calId) {
      return res.status(400).json({ error: '일정 ID가 필요합니다' });
    }
    
    const allowedBranches = ['gamil', 'main', 'self-study', 'all'];

    if (!cal_branch || !cal_date || !cal_title) {
      return res.status(400).json({ error: '필수 정보가 누락되었습니다' });
    }

    if (!allowedBranches.includes(cal_branch)) {
      return res.status(400).json({ error: '지점명(cal_branch)이 유효하지 않습니다' });
    }

    const dateOnly = (typeof cal_date === 'string' && cal_date.split('T')[0]) || cal_date;
    const endOnly = (typeof req.body.cal_end_date === 'string' && req.body.cal_end_date.split('T')[0]) || req.body.cal_end_date || dateOnly;

    const eventData = {
      cal_branch,
      cal_date: dateOnly,
      cal_end_date: endOnly,
      cal_title,
      cal_content
    };
    
    const result = await calendarModel.updateEvent(calId, eventData);
    
    if (!result) {
      return res.status(500).json({ error: '일정 수정 실패' });
    }
    
    return res.status(200).json({ message: '일정이 수정되었습니다' });
  } catch (error) {
    console.error('updateEvent error:', error);
    return res.status(500).json({ error: '일정 수정 중 오류 발생' });
  }
};

/**
 * 일정 삭제
 */
calendarController.deleteEvent = async (req, res) => {
  try {
    const { calId } = req.params;
    
    if (!calId) {
      return res.status(400).json({ error: '일정 ID가 필요합니다' });
    }
    
    const result = await calendarModel.deleteEvent(calId);
    
    if (!result) {
      return res.status(500).json({ error: '일정 삭제 실패' });
    }
    
    return res.status(200).json({ message: '일정이 삭제되었습니다' });
  } catch (error) {
    console.error('deleteEvent error:', error);
    return res.status(500).json({ error: '일정 삭제 중 오류 발생' });
  }
};

/**
 * 특정 일정 조회
 */
calendarController.getEventById = async (req, res) => {
  try {
    const { calId } = req.params;
    
    if (!calId) {
      return res.status(400).json({ error: '일정 ID가 필요합니다' });
    }
    
    const event = await calendarModel.getEventById(calId);

    if (!event) {
      return res.status(404).json({ error: '일정을 찾을 수 없습니다' });
    }

    const pad4 = (n) => (n < 10 ? `0${n}` : `${n}`);
    const d = event.cal_date;
    let dateStr = null;
    if (typeof d === 'string') {
      dateStr = d.split('T')[0];
    } else if (d instanceof Date) {
      dateStr = `${d.getFullYear()}-${pad4(d.getMonth() + 1)}-${pad4(d.getDate())}`;
    } else if (d && d.toString) {
      const tmp = new Date(d);
      dateStr = `${tmp.getFullYear()}-${pad4(tmp.getMonth() + 1)}-${pad4(tmp.getDate())}`;
    }

    let endStr = null;
    if (event.cal_end_date) {
      const e = event.cal_end_date;
      if (typeof e === 'string') endStr = e.split('T')[0];
      else if (e instanceof Date) endStr = `${e.getFullYear()}-${pad4(e.getMonth() + 1)}-${pad4(e.getDate())}`;
      else {
        const tmp3 = new Date(e);
        endStr = `${tmp3.getFullYear()}-${pad4(tmp3.getMonth() + 1)}-${pad4(tmp3.getDate())}`;
      }
    }

    return res.status(200).json({ ...event, cal_date: dateStr, cal_end_date: endStr });
  } catch (error) {
    console.error('getEventById error:', error);
    return res.status(500).json({ error: '일정 조회 중 오류 발생' });
  }
};

module.exports = calendarController;
