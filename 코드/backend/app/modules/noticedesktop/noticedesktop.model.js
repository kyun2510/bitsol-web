const moment = require("moment-timezone");
const noticedesktopModel = {};
const db = database();
const getKoreanTime = () => {
    // 'Asia/Seoul' 시간대를 사용하여 현재 한국 시간을 얻습니다.
    return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
}
const currentDatetime = getKoreanTime()

//건강 팁 등록
noticedesktopModel.addhealthtipItem = async (tipData) => {
    let newTip = null;

    const tipRecord = {
        tip_type : tipData.tip_type,
        tip_title : tipData.tip_title,
        tip_sub_title : tipData.tip_sub_title,
        tip_content : tipData.tip_content ?? '',
        ox_content : tipData.ox_content ?? '',
        ox_answer : tipData.ox_answer ?? 'O',
        ox_comment : tipData.ox_comment ?? '',
        thumb_filepath : tipData.thumb_filepath,
        cou_id : tipData.cou_id ?? 0, //*쿠폰 고유번호 설정에 따라 컬럼명 변경해주세요
        reg_user : tipData.reg_user,
        reg_date : currentDatetime,
        tip_status : tipData.tip_status,
    };

    await db
        .insert(tipRecord)
        .into('wb_notice_desktop')
        .then((insertedId) => {
            newTip = insertedId;
        })
        .catch((e) => {
            console.log(e);
        });

    return newTip;
};

/*건강 팁 목록 불러오기*/
noticedesktopModel.getHealthtipList = async (keyword, page,pagerow) => {
    const db = database();
    let tipList = {
        list: null,
        totalCount: 0
    };

    if (keyword === 'all') {
        // 'all' 또는 ''(빈문자열)인 경우 전체 배열을 불러옴
        let query = db
            .select('tip.*', 'cou.cou_name')
            .from('wb_notice_desktop as tip')
            .leftJoin('wb_coupon as cou', 'tip.cou_id', 'cou.cou_id')
            .where('tip_status', '=', 'Y')
            .orderBy('reg_date', 'DESC')

        await query.then(rows => tipList.totalCount = rows.length);
        if (page > 0) {
            const itemsPerPage = pagerow;
            const offset = (page - 1) * itemsPerPage;

            query = query.limit(itemsPerPage).offset(offset);
            // console.log(itemsPerPage, 'hosadfaodfjadosdfj')
        }

        tipList.list = await query;

    } else {
        // 조건에 맞는 행을 선택
        let query = db
            .select('*')
            .from('wb_notice_desktop')
            //cont_type 필드 혹은 cont_text 필드에 '광고'라는 문자열이 포함되어 있는 경우, 코드를 어떻게 수정하면 좋을까?
            .andWhere('tip_status', '=', 'Y')
            .andWhere('tip_type', 'LIKE', `%${keyword}%`)
            .orderBy('reg_date', 'DESC')

        tipList.totalCount = await query.length
        if (page > 0) {
            const itemsPerPage = 10;
            const offset = (page - 1) * itemsPerPage;
            query = query.limit(itemsPerPage).offset(offset);
        }

        tipList.list = await query;
    }

    return tipList;
};
/*건강 팁 숨김 목록 불러오기*/
noticedesktopModel.getHealthtipHideList = async (keyword) => {
    let tipList = null;
        await db
            .select('tip.*', 'cou.cou_name')
            .from('wb_notice_desktop as tip')
            .leftJoin('wb_coupon as cou', 'tip.cou_id', 'cou.cou_id')
            .where('tip_status', '=', 'H')
            .orderBy('reg_date', 'DESC')
            .then(rows => {
                tipList = (rows.length > 0) ? rows : [];
            })
            .catch((e) => {
                console.log(e);
                tipList = null;
            });

    return tipList;
};
//건강 팁 latest 불러오기
noticedesktopModel.getHealthtipNews = async () => {
    let tipList = null;

    try {
        const quizTipsPromise = db
          .select('*')
          .from('wb_notice_desktop')
          .where('tip_type', 'QUIZ')
          .andWhere('tip_status', '=', 'Y')
          .orderBy('reg_date', 'DESC')
          .limit(1);

        const nutTipsPromise = db
          .select('*')
          .from('wb_notice_desktop')
          .where('tip_type', 'NUT')
          .andWhere('tip_status', '=', 'Y')
          .orderBy('reg_date', 'DESC')
          .limit(2);

        const lifeTipsPromise = db
          .select('*')
          .from('wb_notice_desktop')
          .where('tip_type', 'LIFE')
          .andWhere('tip_status', '=', 'Y')
          .orderBy('reg_date', 'DESC')
          .limit(2);

        tipList = await Promise.all([quizTipsPromise, nutTipsPromise, lifeTipsPromise])
          .then(results =>  {
              console.log(results);
              return [].concat(...results)}
          );
        // console.log(tipList, 'hoho');
        return tipList;

    }catch (e) {
        // console.log('---- 에러 발생')
        // console.log(e);
        return null;
    }
}
//건강 팁 상세 불러오기
noticedesktopModel.getTipById = async (tip_idx) => {
    const db = database();
    try {
        // 현재 글
        let currentTip = await db
          .select('H.*', 'cou.*')
          .from('wb_notice_desktop AS H')
          .leftJoin('wb_coupon AS cou', 'H.cou_id', 'cou.cou_id')
          .where('tip_idx', tip_idx)
          // .andWhereNot('tip_status', 'N')
          .limit(1);

// 이전 글
        let previousTip = await db
          .select('H.*', 'cou.*')
          .from('wb_notice_desktop AS H')
          .leftJoin('wb_coupon AS cou', 'H.cou_id', 'cou.cou_id')
          .where('tip_idx', '<', tip_idx)
          .andWhere('tip_status', 'Y')
          .andWhere('tip_type', currentTip[0].tip_type)
          .orderBy('tip_idx', 'desc')
          .limit(1);

// 다음 글
        let nextTip = await db
          .select('H.*', 'cou.*')
          .from('wb_notice_desktop AS H')
          .leftJoin('wb_coupon AS cou', 'H.cou_id', 'cou.cou_id')
          .where('tip_idx', '>', tip_idx)
          .andWhere('tip_status', 'Y')
          .andWhere('tip_type', currentTip[0].tip_type)
          .orderBy('tip_idx', 'asc')
          .limit(1);

// 결과 합치기
        let result = {
            current: currentTip[0] || null,
            previous: previousTip[0] || null,
            next: nextTip[0] || null
        };

        return result;
    }catch (e) {
        return null;
    }

}

//건강 팁 수정
noticedesktopModel.updateTipItem = async(updateTipItem) => {
    const db = database();
console.log('수정하기 자료 ', updateTipItem);
    await db('wb_notice_desktop')
            .where('tip_idx', updateTipItem.tip_idx)
            .update({
                tip_title: updateTipItem.tip_title,
                tip_sub_title: updateTipItem.tip_sub_title,
                tip_type: updateTipItem.tip_type,
                tip_content: updateTipItem.tip_content,
                ox_content: updateTipItem.ox_content,
                ox_answer: updateTipItem.ox_answer,
                ox_comment: updateTipItem.ox_comment,
                thumb_filepath: updateTipItem.thumb_filepath,
                tip_status : updateTipItem.tip_status,
                cou_id: updateTipItem.cou_id
            })
            .catch((e) => {
                console.log(e);
                return null;
            });

    // 업데이트된 내용(id와 title)을 반환합니다.
    return { "tip_idx": updateTipItem.tip_idx }; // 또는 필요에 따라 업데이트된 내용 반환
};

//건강 팁 상태수정
noticedesktopModel.updateTipState = async (updateList, updateState) =>{
    let result = null;
    await db('wb_notice_desktop')
        .whereIn('tip_idx', updateList)
        .update({
            tip_status: updateState
        })
        .then((row)=>{

            result = row;

        })
        .catch((e) => {
            console.log(e);
            result = null;
        });
    return result;

};

// 1. 정답 인풋 모델
noticedesktopModel.createLog = async (mem_idx, tip_idx, mem_answer, trx) => {
    return db('wb_health_tip_log').insert({
        mem_idx: mem_idx,
        tip_idx: tip_idx,
        mem_answer: mem_answer
    });
};

// 2. 쿠폰 정보 모델
noticedesktopModel.getCouIdByTipIdx = async (tip_idx) => {
    const result = await db('wb_notice_desktop AS HT')
        .join('wb_coupon AS C', 'HT.cou_id', 'C.cou_id')
        .where('HT.tip_idx', tip_idx)
        .select('C.cou_id')
        .first();
    return result ? result.cou_id : null;
};

/* ---------------------------- */

// 회원이 해당 OX 퀴즈를 풀었는지 확인
noticedesktopModel.checkLogDetail = async(tip_idx, mem_idx) => {
    try{
        const db = database();
        let logById = null;

        /*
        tipDetail을 들고 오면서 회원이 이 문제를 풀었는지 아닌지 정보도 들고와야 하는데..
        tip_idx, mem_idx 필요

        1. wb_health_tip이라는 table에서 다음의 정보를 찾는다.
            1-1. tip_idx의 값으로 해당 tip의 정보를 찾는다.
            1-2. tip_type은 QUIZ이고, status는 Y여야 함.
        2. wb_health_tip_log에서 다음의 정보를 찾는다.
            2-1. tip_idx 필드의 값이 1에서 찾아낸 tip_idx와 동일한 값을 가진 데이터
            2-2. 단, mem_idx 필드의 값이 인자로 받은 mem_idx와 동일해야 함.
        */

        await db
            .select('H.*')
            .from('wb_health_tip_log AS H')
            .where('tip_idx', '=', tip_idx)
            .andWhere('mem_idx', '=' , mem_idx)
            .limit(1)
            .then(rows => {
                logById = (rows.length > 0) ? rows[0] : [];
            })
            .catch((e) => {
                console.log(e);
                logById = null;
            });

            return logById;
    } catch (e) {
        console.error('건강팁 ox 에러', e)
        return null;
    }
}


module.exports = noticedesktopModel
