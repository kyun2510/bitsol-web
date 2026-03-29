const noticedesktopController = {};
const noticedesktopModel = loadModule('noticedesktop', 'model')
const db = database();

//건강 팁 등록
noticedesktopController.addHealthtipItem = async(req, res) => {
    try {
        const tipData = req.body;
console.log(tipData);
        if(tipData == null) {
            return res.status(401).json({ error: '등록할 건강팁 데이터가 없습니다.' });
        }

        // 파일 업로드 경로 생성
        const filePath = req.file ? `/files/images/notice_desktop/${req.file.filename}` : '';

        // 카테고리 데이터에 파일 경로 추가
        tipData.thumb_filepath = filePath;

        const newTipItem = await noticedesktopModel.addhealthtipItem(tipData);


        //TODO
        /*
        1. 건강 팁이 등록될 때 지급할 쿠폰이 지정된다.
        2. 한 번 쿠폰을 지급하면 이 쿠폰은 status를 변경하여 다른 퀴즈 및 이벤트에서 지급 불가하도록 처리한다.
        */
        if(!newTipItem) {
            return res.status(500).json({ error: "Failed to add tip" });
        }
        return res.status(200).json({ "tip_idx" : newTipItem[0] });
    } catch (error) {
        console.error("Error adding tip:", error);
        return res.status(500).json({ error: "Failed to add tip" });
    }
};

//건강 팁 목록 불러오기
noticedesktopController.getHealthtipList = async(req, res) => {
    const page = req.query.page || 0
    const pagerow = req.query.pagerow || 10
    try {

        // 데이터베이스에서 건강 팁  목록을 조회
        const keyword = req.params?.keyword ?? '';
        const tipList = await noticedesktopModel.getHealthtipList(keyword, page,pagerow);
        const totalCountArr = await noticedesktopModel.getHealthtipList(keyword, null, null)
        const totalCount = totalCountArr.length

        // console.log(tipList)

        // 건강 팁  목록 반환
        return res.status(200).json(tipList);
    } catch (error) {
        console.error("Error fetching tip list:", error);
        return res.status(500).json({ error: "Failed to fetch tip list" });
    }
};
//건강팁에서 숨김처리된 팁 목록만 불러오기
noticedesktopController.getHealthtipHideList = async(req, res) => {
    try {

        // 데이터베이스에서 건강 팁 숨김 목록을 조회
        const hideTipList = await noticedesktopModel.getHealthtipHideList();

        // 건강 팁  목록 반환
        return res.status(200).json(hideTipList);
    } catch (error) {
        console.error("Error fetching tip list:", error);
        return res.status(500).json({ error: "Failed to fetch tip list" });
    }
};

//건강팁 최신글 불러오기
noticedesktopController.getHealthtipNews = async(req, res) =>  {
    // console.log('hohohoho')
    try {
        // console.log('시작')
        const tipList = await noticedesktopModel.getHealthtipNews();
        // console.log('끝')
        if(!tipList) {
            return res.status(403).json({ message: "불러오기 중 실패 했습니다." });
        }

        return res.status(200).json(tipList);;

    }catch (e) {
        console.error('---건강팁 뉴스 에러-----');
        console.error(e);
        console.error('---건강팁 뉴스 에러-----');
        return res.status(500).json({ error: "건강팁 뉴스 에러" });

    }
}
//건강 팁  상세 불러오기
noticedesktopController.getTipById = async(req, res) => {
    try {
        // 데이터베이스에서 건강 팁  상세보기 조회
        const tip_idx = req.params?.tip_idx ?? '';
        const tipDetail = await noticedesktopModel.getTipById(tip_idx);

        console.log(tipDetail)

        // 건강 팁  상세보기 반환
        return res.status(200).json(tipDetail);
    } catch (error) {
        console.error("Error fetching quiz detail:", error);
        return res.status(500).json({ error: "Failed to fetch quiz detail" });
    }
}

//건강 팁 수정
noticedesktopController.updateTipItem = async(req, res) => {
    try {
        const updateTipItem = req.body;
        console.log('updatequizItem: ')
        console.log(updateTipItem)
        //tip_idx 실존하는지 || tip_status 상태가 Y인지 검증
        const checkedTipItem = await noticedesktopModel.getTipById(updateTipItem.tip_idx);

        if(checkedTipItem == null) {
            return res.status(500).json({ error: "수정할 팁 게시글을 찾을 수 없습니다." })
        }

        console.log('checkedTipItem: ');
        console.log(checkedTipItem);

        if(req.file){ //req.file 이 있을 때만 아래 로직 진행

            // 이미지 파일 삭제 로직 추가 ---------------------------------------------------------
            if (req.file && checkedTipItem && checkedTipItem.thumb_filepath) {
                const path = require('path');
                const fs = require('fs');

                // 이미지 파일이 존재하면 삭제
                const imagePath = path.join(__dirname, '../../', checkedTipItem.thumb_filepath);
                console.log('imagePath: ' + imagePath);

                try {
                    fs.unlinkSync(imagePath);
                    console.log(`이전 이미지 파일 삭제: ${imagePath}`);
                } catch (error) {
                    console.error(`이전 이미지 파일 삭제 실패: ${error}`);
                }
            }

            // 파일 업로드 경로 생성

            const thumb_filepath = req.file ? `/files/images/notice_desktop/${req.file.filename}` : '';
            if(thumb_filepath.length > 0){
                updateTipItem.thumb_filepath = thumb_filepath;
            }
        }

        // 건강 팁  수정 --------------------------------------------------
        const updatedTipItem = await noticedesktopModel.updateTipItem(updateTipItem);

        if (!updatedTipItem || updatedTipItem == null) {
            return res.status(404).json({ error: "info item not found" });
        }

        console.log(`${updatedTipItem.tip_idx}의 정보 수정 성공`)

        return res.status(200).json({message: `${updatedTipItem.tip_idx}의 정보 수정 성공`});
    } catch (error) {
        console.error("Error updating notice desktop:", error);
        return res.status(500).json({ error: "Failed to update notice desktop" });
    }
};

//건강 팁 상태 변경
noticedesktopController.updateTipStatus = async(req, res)=>{

    try{
        const changeIdsList = req.body.tipIds;
        const changeStatus = req.body.status;
        // console.log(changeIdsList, changeStatus)
        if (changeIdsList.length === 0) {
            return res.status(400).json({error: '변경할 건강 팁이 없습니다.'});
        }

        const updateResult = await noticedesktopModel.updateTipState(changeIdsList, changeStatus)
     // console.log(updateResult);
        if(updateResult === 0 || !updateResult){
            return res.status(503).json({error: '팁 상태변경에 실패했습니다.'});
        }

        return res.status(200).json({"result" : "success" , "message": `${updateResult}개의 notice desktop 상태가 변경되었습니다.`
        });



    }catch (e) {
        return res.status(500).json({ error: "Failed to change status notice desktop" });
    }
}

/*건강 팁 삭제*/
noticedesktopController.deleteTipItem = async(req, res) => {
    try {
        const deleteIdsList = req.body.tipIds;

        if (deleteIdsList.length === 0) {
            return res.status(400).json({error: '삭제할 건강 팁이 없습니다.'});
        }

        // console.log('deleteIdsList:')
        // console.log(deleteIdsList)

        for (const item of deleteIdsList) {
            const deleteFileColumn = await noticedesktopModel.getTipById(item);

            if (!deleteFileColumn) {
                return res.status(500).json({ error: `선택한 카테고리는 존재하지 않습니다.` })
            } else {
                console.log(`카테고리 확인!`)
            }

        // 이미지 파일 삭제 처리 ---------------------------------------------------

            if (deleteFileColumn[0] && deleteFileColumn[0].thumb_filepath !== '') {
                const path = require('path');
                const fs = require('fs');

                // 이미지 파일이 존재하면 삭제
                const imagePath = path.join(__dirname, '../../', deleteFileColumn.thumb_filepath);
                // console.log('imagePath: ' + imagePath);

                try {
                    fs.unlinkSync(imagePath);
                    console.log(`이전 이미지 파일 삭제: ${imagePath}`);
                } catch (error) {
                    console.error(`이전 이미지 파일 삭제 실패: ${error}`);
                }
            }
        }

        // deleteIdsList 배열에 있는 각 quiz_id를 사용하여 해당 행의 quiz_status를 "취소"로 업데이트합니다.
        for (const item of deleteIdsList) {
            await db('wb_notice_desktop')
                .where('tip_idx', item)
                .update({
                    tip_status: 'N',
                    thumb_filepath: ''
                })
                .catch((e) => {
                    console.log(e);
                    return null;
                });
        }

        return res.status(200).json({ message: '건강 팁이 성공적으로 삭제되었습니다.' });
    } catch (error) {
        console.error("Error deleting notice_desktop:", error);
        return res.status(500).json({ error: "Failed to delete notice_desktop" });
    }
};



/* 쿠폰 관련  -----------------------------------*/
//회원이 OX 퀴즈를 푼 경우 결과 저장 + 보상 쿠폰 지급
noticedesktopController.giveCoupon = async(req, res) => {
    //TODO: 고의로 에러를 냈을 때 트랜잭션이 작동하지 않지만 정상적으로 값을 받았을 때에는 작동이 됨

    let tip_idx = req.body.tip_idx
    let mem_idx = req.body.mem_idx
    let exp_datetime = req.body.exp_datetime;
    let mem_answer = req.body.mem_answer //O,X
    // console.log(req.body)

    try{
        if (!mem_answer) {
            return res.status(400).json({ error: "사용자가 제출한 답이 확인되지 않습니다." });
        }
        if (mem_answer === 'O' || mem_answer === 'X') {
            // const trx = await db.transaction(); // 트랜잭션 시작
            try {

                /* ----------------------------------- 회원이 이미 문제를 풀었는지 확인 필요 */
                const checkedLog = await noticedesktopModel.checkLogDetail(tip_idx, mem_idx)
                // console.log('check: ', checkedLog);

                if(checkedLog && checkedLog.length != 0){
                    return res.status(200).json({message : '이미 푼 문제입니다!', checkedLog: false})
                }


                /* ----------------------------------- 문제가 존재하지 않는지 확인 */
                const oxQuizDetail = await noticedesktopModel.getTipById(tip_idx);

                // console.log('oxQuizDetail::')
                // console.log(oxQuizDetail)

                if(!oxQuizDetail || oxQuizDetail === null){
                    return res.status(500).json({error: "해당 문제가 존재하지 않습니다."});
                }


                /* ----------------------------사용자가 보낸 log 저장 */
                await noticedesktopModel.createLog(mem_idx, tip_idx, mem_answer);

                /* ----------------------------퀴즈 정답 맞췄는지 여부 확인 + 정답일 시 쿠폰 발급 */

                if(oxQuizDetail.current.ox_answer !== mem_answer){
                    return res.status(200).json({ message: "오답! 다음엔 힘내보아요!", checkedLog: true });
                }



                const cou_id = await noticedesktopModel.getCouIdByTipIdx(tip_idx);

                //만약 cou_id 가 0이 아니라면 실재하는 쿠폰인지 확인
                if(cou_id !== 0){

                }


                if (cou_id) {

                } else {

                    return res.status(200).json({ message: "정답! 등록된 쿠폰이 없습니다.", checkedLog: true });
                }
            }catch (innerError) {
                // if (!trx.isCompleted()) {  // 롤백이나 커밋이 아직 수행되지 않았다면
                //     await trx.rollback(); // 트랜잭션 롤백
                // }
                // throw innerError;  // 오류를 상위 catch 블록으로 전달
                console.error(innerError);
            }

            return res.status(200).json({ message: "정답! 쿠폰이 성공적으로 발급되었습니다.", checkedLog: true });
        } else {
            return res.status(500).json({error: "잘못된 답변 형식입니다. O 또는 X를 입력해주세요."});
        }
    } catch (error) {
        console.error("Error giving coupon:", error);
        return res.status(500).json({ error: "Failed to give coupon" });
    }
}

//회원이 해당 OX 퀴즈 풀었는지 확인
noticedesktopController.checkLogDetail = async(req, res) => {
    try {
        const tip_idx = req.body.tip_idx;
        const mem_idx = req.body.mem_idx;

        if(!tip_idx || !mem_idx) {
            return res.status(401).json({ error: "확인에 필요한 정보가 전송되지 않았습니다." });
        }

        const checkedLog = await noticedesktopModel.checkLogDetail(tip_idx, mem_idx);

        console.log('checkedLog: ')
        console.log(checkedLog);

        if(!checkedLog) {
            return res.status(500).json({ error: "로그 확인 중 에러 발생" });
        }

        if(checkedLog.length === 0){
            return res.status(200).json({message : '아직 풀지 않은 문제입니다!',checkedLog : true}) //아직 문제를 풀지 않은 경우
        }

        return res.status(200).json({message : '이미 푼 문제입니다!', checkedLog : false}) //이미 문제를 푼 경우
    } catch (error) {
        console.error("Error checking coupon:", error);
        return res.status(500).json({ error: "Failed to check coupon" });
    }
}

module.exports = noticedesktopController
