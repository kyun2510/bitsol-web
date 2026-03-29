/**
 * Products Routes
 * --------------------------------------------------------------------------------
 * Products에 관련된 라우팅 설정
 */

const router = require('express').Router()
const controller = loadModule('noticedesktop', 'controller');

const db = database()

/*  -------------------------------------- */

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// 파일명 생성 함수
function makeNewFileName() {
    const newFileName = uuidv4();
    return newFileName;
}

// 파일 업로드를 위한 Multer 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '../../data/files/images/notice_desktop');
        try {
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
        } catch (err) {
            console.error('디렉토리 생성 중 에러 발생:', err);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const newFileName = makeNewFileName();
        const fileExtension = path.extname(file.originalname);

        // req.body에 filepath 필드가 있다면 해당 값을 변경
        if (req.body.thumb_filepath) {
            req.body.thumb_filepath = `${newFileName}${fileExtension}`;
        }

        cb(null, `${newFileName}${fileExtension}`);
    }
});

const fileFilter = function (req, file, cb) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
    const fileExtension = path.extname(file.originalname);

    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true); // 허용된 확장자인 경우 true 반환
    } else {
        cb(new Error('허용되지 않는 파일 형식입니다.'), false); // 허용되지 않는 확장자인 경우 false 반환
    }
};


const upload = multer({ storage: storage, fileFilter: fileFilter });


/*  -------------------------------------- */

//건강 팁 등록
router.post('/', upload.single('thumb_filepath'), controller.addHealthtipItem)
//건강 팁 최신글 불러오기
router.get('/list/news', controller.getHealthtipNews)
//건강 팁 목록 불러오기
router.get('/list/:keyword', controller.getHealthtipList)
//건강 팁 중 숨김 불러오기
router.get('/hidelist', controller.getHealthtipHideList)
//건강 팁 상세 불러오기
router.get('/:tip_idx', controller.getTipById)
//건강 팁 수정
router.put('/', upload.single('thumb_filepath'), controller.updateTipItem)
//건강 팁 상태 변경
router.put('/tipstatus', controller.updateTipStatus)
//건강 팁 삭제
router.post('/delete', controller.deleteTipItem)

/* 쿠폰 관련  -----------------------------------*/
//회원이 OX 퀴즈를 푼 경우 결과 저장 + 보상 쿠폰 지급
router.post('/coupon/give', controller.giveCoupon)

//회원이 해당 OX 퀴즈 풀었는지 확인
router.post('/logcheck', controller.checkLogDetail)


/**
 * 객체 내보내기
 */
module.exports = router
