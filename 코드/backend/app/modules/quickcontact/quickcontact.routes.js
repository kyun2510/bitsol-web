const router = require('express').Router()
const quickcontactController = loadModule('quickcontact', 'controller');


// 전체 불러오기
router.get('/', quickcontactController.getAllContacts);

// 작성하기
router.post('/post', quickcontactController.addContact);

// 문의하기 특정 게시물
router.get('/quickcontact/:not_id', quickcontactController.getContactById);

// 문의하기 특정 게시물 삭제
router.put('/delete', quickcontactController.deleteContact);


module.exports = router;
