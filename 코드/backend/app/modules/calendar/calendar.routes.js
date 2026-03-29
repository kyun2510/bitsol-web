/**
 * Calendar Routes
 * 학원 일정(이벤트) 관리 라우팅
 */

const router = require('express').Router();
const controller = loadModule('calendar', 'controller');

// 모든 일정 조회
router.get('/all', controller.getAllEvents);

// 날짜 범위 조회
router.get('/range', controller.getEventsByDateRange);

// 특정 날짜 일정 조회
router.get('/date', controller.getEventsByDate);

// 특정 일정 조회
router.get('/:calId', controller.getEventById);

// 일정 생성
router.post('/', controller.createEvent);

// 일정 수정
router.put('/:calId', controller.updateEvent);

// 일정 삭제
router.delete('/:calId', controller.deleteEvent);

module.exports = router;
