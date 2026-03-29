import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal, Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { MdClose } from 'react-icons/md';
import api from '../../api/axios.js';
import { Loading } from '../loading.jsx';
import '../Dashboard/Dashboard.css';

const BRANCH_COLORS = {
  gamil: '#3B82F6',
  main: '#10B981',
  'self-study': '#F59E0B',
  all: '#000000'
};

const BRANCH_NAMES = {
  gamil: '감일종합',
  main: '빛솔본점',
  'self-study': '독학재수관',
  all: '전체'
};

const BRANCH_SHORT = {
  gamil: '감일',
  main: '본점',
  'self-study': '독학'
  ,all: '전체'
};

export default function DashboardChart() {
  const [events, setEvents] = useState([]);
  const [todayEvents, setTodayEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    cal_branch: 'gamil',
    cal_date: '',
    cal_end_date: '',
    cal_title: '',
    cal_content: ''
  });
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  // 달력 이벤트 로드
  useEffect(() => {
    loadEvents();
  }, []);

  // 캘린더에서 날짜 범위 선택(select) 처리
  const handleSelect = (info) => {
    // info.startStr, info.endStr
    const start = info.startStr;
    // info.endStr is exclusive; set end to the previous day
    const endDate = new Date(info.end);
    endDate.setDate(endDate.getDate() - 1);
    const end = endDate.toISOString().split('T')[0];
    setSelectedDate(start);
    setFormData({
      cal_branch: 'gamil',
      cal_date: start,
      cal_end_date: end,
      cal_title: '',
      cal_content: ''
    });
    setEditingId(null);
    setOpenModal(true);
  };

  const loadEvents = async () => {
    try {
      setLoading(true);
      const response = await api.get('/calendar/all');
      
      if (response.data && Array.isArray(response.data)) {
        const calendarEvents = response.data
          .filter(event => event.cal_status === 'Y')
          .map(event => {
            // normalize date to YYYY-MM-DD (ensure all-day)
            const dateStr = typeof event.cal_date === 'string'
              ? (event.cal_date.split('T')[0] || event.cal_date)
              : (event.cal_date ? new Date(event.cal_date).toISOString().split('T')[0] : null);

            const prefix = BRANCH_SHORT[event.cal_branch] ? `[${BRANCH_SHORT[event.cal_branch]}] ` : '';
            // compute end display: FullCalendar uses exclusive end for allDay events
            const endDate = event.cal_end_date || event.cal_date;
            // end for FullCalendar should be next day of cal_end_date to render inclusive range
            const endObj = new Date(endDate);
            endObj.setDate(endObj.getDate() + 1);
            const endDisplay = endObj.toISOString().split('T')[0];

            return ({
              id: event.cal_id,
              // show branch short prefix in title for display, keep original in extendedProps
              title: `${prefix}${event.cal_title}`,
              start: dateStr,
              end: endDisplay,
              allDay: true,
              display: 'block',
              textColor: '#ffffff',
              backgroundColor: BRANCH_COLORS[event.cal_branch] || '#3B82F6',
              borderColor: BRANCH_COLORS[event.cal_branch] || '#3B82F6',
              extendedProps: {
                branch: event.cal_branch,
                content: event.cal_content || '',
                cal_id: event.cal_id,
                cal_end_date: event.cal_end_date || event.cal_date,
                originalTitle: event.cal_title
              }
            })
          });
        
        setEvents(calendarEvents);

        // 오늘 날짜 이벤트 필터링 (calendarEvents의 start 값 사용 -> YYYY-MM-DD 보장)
        const today = new Date().toISOString().split('T')[0];
        const todayEventsData = calendarEvents
          .filter(ev => ev && ev.start === today)
          .map(ev => ({
            cal_id: ev.id,
            cal_branch: ev.extendedProps.branch,
            cal_title: ev.extendedProps.originalTitle || ev.title,
            cal_content: ev.extendedProps.content || '',
            cal_end_date: ev.extendedProps.cal_end_date || ev.end,
            cal_date: ev.start
          }));

        setTodayEvents(todayEventsData);
      }
      setLoading(false);
    } catch (error) {
      console.error('이벤트 로드 오류:', error);
      setLoading(false);
    }
  };

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setFormData({
      cal_branch: 'gamil',
      cal_date: info.dateStr,
      cal_end_date: info.dateStr,
      cal_title: '',
      cal_content: ''
    });
    setEditingId(null);
    setOpenModal(true);
  };

  const handleEventClick = (info) => {
    const ev = info.event;
    const evDate = ev.startStr || (ev.start ? ev.start.toISOString().split('T')[0] : '');
    setSelectedDate(evDate);
    setFormData({
      cal_branch: ev.extendedProps.branch,
      cal_date: evDate,
      // use originalTitle (without prefix) when editing
      cal_title: ev.extendedProps.originalTitle || ev.title,
      cal_content: ev.extendedProps.content,
      cal_end_date: ev.extendedProps.cal_end_date || (ev.endStr || ev.end ? (ev.endStr || ev.end.toISOString().split('T')[0]) : evDate)
    });
    // ev.id is string; convert to number if possible
    const id = ev.extendedProps && ev.extendedProps.cal_id ? ev.extendedProps.cal_id : ev.id;
    setEditingId(id);
    setOpenModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveEvent = async () => {
    if (!formData.cal_title.trim()) {
      alert('제목을 입력해주세요');
      return;
    }

    try {
      if (editingId) {
        // 수정
        // normalize dates to YYYY-MM-DD
        const normalizedStart = (typeof formData.cal_date === 'string' ? formData.cal_date.split('T')[0] : new Date(formData.cal_date).toISOString().split('T')[0]);
        const normalizedEnd = (typeof formData.cal_end_date === 'string' ? formData.cal_end_date.split('T')[0] : new Date(formData.cal_end_date).toISOString().split('T')[0]);
        const payload = { ...formData, cal_date: normalizedStart, cal_end_date: normalizedEnd };
        await api.put(`/calendar/${editingId}`, payload);
      } else {
        // 생성
        const normalizedStart = (typeof formData.cal_date === 'string' ? formData.cal_date.split('T')[0] : new Date(formData.cal_date).toISOString().split('T')[0]);
        const normalizedEnd = (formData.cal_end_date && typeof formData.cal_end_date === 'string') ? formData.cal_end_date.split('T')[0] : (formData.cal_end_date ? new Date(formData.cal_end_date).toISOString().split('T')[0] : normalizedStart);
        const payload = { ...formData, cal_date: normalizedStart, cal_end_date: normalizedEnd };
        await api.post('/calendar', payload);
      }
      
      await loadEvents();
      setOpenModal(false);
      setFormData({
        cal_branch: 'gamil',
        cal_date: '',
        cal_end_date: '',
        cal_title: '',
        cal_content: ''
      });
      setEditingId(null);
    } catch (error) {
      console.error('이벤트 저장 오류:', error);
      alert('이벤트 저장에 실패했습니다.');
    }
  };

  const handleDeleteEvent = async () => {
    if (!window.confirm('이 일정을 삭제하시겠습니까?')) {
      return;
    }

    try {
      await api.delete(`/calendar/${editingId}`);
      await loadEvents();
      setOpenModal(false);
      setEditingId(null);
    } catch (error) {
      console.error('이벤트 삭제 오류:', error);
      alert('이벤트 삭제에 실패했습니다.');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="dashboard-calendar-section">
      <div className="calendar-layout">
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth'
            }}
            displayEventTime={false}
            allDayDefault={true}
            eventDisplay="block"
            selectable={true}
            selectMirror={true}
            select={handleSelect}
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            locale="ko"
            height="auto"
          />
        </div>

        {/* 오늘의 특이사항 섹션 */}
        <div className="todays-notes-section">
          <h3 className="notes-title">오늘의 특이사항</h3>
          {todayEvents.length > 0 ? (
            <div className="notes-list">
              {todayEvents.map((event) => (
                <div key={event.cal_id} className="note-item">
                  <span
                    className="branch-indicator"
                    style={{ backgroundColor: BRANCH_COLORS[event.cal_branch] }}
                    title={BRANCH_NAMES[event.cal_branch]}
                  />
                  <div className="note-content">
                    <h4 className="note-title">
                      <span
                        className="note-branch"
                        style={{ color: BRANCH_COLORS[event.cal_branch] }}
                        title={BRANCH_NAMES[event.cal_branch]}
                      >
                        [{BRANCH_SHORT[event.cal_branch] || BRANCH_NAMES[event.cal_branch]}]
                      </span>
                      {event.cal_title}
                    </h4>
                    {event.cal_content && (
                      <p className="note-description">{event.cal_content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-notes">오늘의 특이사항이 없습니다.</div>
          )}
        </div>
      </div>

      {/* 이벤트 생성/수정 모달 */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box className="modal-box">
          <div className="modal-header">
            <h2>{editingId ? '일정 수정' : '일정 등록'}</h2>
            <button className="close-btn" onClick={() => setOpenModal(false)}>
              <MdClose />
            </button>
          </div>

          <div className="modal-body">
            <FormControl fullWidth size="small" className="form-group">
              <InputLabel>지점</InputLabel>
              <Select
                name="cal_branch"
                value={formData.cal_branch}
                onChange={handleFormChange}
                label="지점"
              >
                <MenuItem value="all">전체</MenuItem>
                <MenuItem value="gamil">감일종합</MenuItem>
                <MenuItem value="main">빛솔본점</MenuItem>
                <MenuItem value="self-study">독학재수관</MenuItem>
              </Select>
            </FormControl>

            <div style={{display:'flex', gap:8}}>
              <TextField
                fullWidth
                size="small"
                type="date"
                name="cal_date"
                label="시작일"
                value={formData.cal_date}
                onChange={handleFormChange}
                className="form-group"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                size="small"
                type="date"
                name="cal_end_date"
                label="종료일"
                value={formData.cal_end_date}
                onChange={handleFormChange}
                className="form-group"
                InputLabelProps={{ shrink: true }}
              />
            </div>

            <TextField
              fullWidth
              size="small"
              name="cal_title"
              label="제목"
              value={formData.cal_title}
              onChange={handleFormChange}
              className="form-group"
              placeholder="일정 제목을 입력하세요"
            />

            <TextField
              fullWidth
              size="small"
              name="cal_content"
              label="설명"
              value={formData.cal_content}
              onChange={handleFormChange}
              className="form-group"
              placeholder="특이사항 설명을 입력하세요"
              multiline
              rows={4}
            />
          </div>

          <div className="modal-footer">
            {editingId && (
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteEvent}
                className="btn-delete"
              >
                삭제
              </Button>
            )}
            <Button
              variant="outlined"
              onClick={() => setOpenModal(false)}
              className="btn-cancel"
            >
              취소
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveEvent}
              className="btn-save"
            >
              {editingId ? '수정' : '저장'}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}



