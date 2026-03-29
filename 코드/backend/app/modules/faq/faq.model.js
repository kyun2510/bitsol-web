const faqModel = {};

const currentDatetime = new Date(); // 현재 날짜 및 시간 얻기

/*FAQ Category 추가*/
faqModel.addfaqCategory = async(fac_title, mem_idx) => {
    const db = database();
    let newCategory = null;

    console.log('categoryName::' + fac_title)
    console.log('userid::' + mem_idx)

    const cartegoryData = {
        // fac_idx: categoryIdx,
        fac_title: fac_title,
        reg_user: mem_idx,
        reg_datetime: currentDatetime
    }

    await db
        .insert(cartegoryData)
        .into('wb_faq_category')
        .then((insertedId) => {
            newCategory  = insertedId;
        })
        .catch((e) => {
            console.log(e);
        });

    return newCategory[0];
};

/*모든 FAQ Category 목록 불러오기*/
faqModel.getAllFaqCategory = async() => {
    const db = database();
    let faqsArray = [];

    await db
        .select('*')
        .from('wb_faq_category')
        .where('fac_status', '=', 'Y')
        .then(rows => {
            faqsArray = rows;
        })
        .catch((e) => {
            console.log(e);
        });

    return faqsArray;
};

/* 특정 FAQ Category 상세 보기 */
faqModel.getFacItemById = async (fac_idx) => {
    const db = database();
    let facById = null;

    await db
        .select('C.*')
        .from('wb_faq_category AS C')
        .where('fac_idx', '=', fac_idx)
        .andWhere('fac_status', '=', 'Y')
        .limit(1)
        .then(rows => {
            facById = (rows.length > 0) ? rows[0] : null;
        })
        .catch((e) => {
            console.log(e);
            facById = null;
        });

    return facById;
};

/*FAQ Category 수정*/
faqModel.updateFaqCategoryItem = async (updateFac) => {
    const db = database();


    await db('wb_faq_category')
        .where('fac_idx', updateFac.fac_idx)
        .update({
            fac_title: updateFac.fac_title,
            upd_user: updateFac.upd_user,
            upd_datetime: currentDatetime // 현재 날짜 및 시간 삽입
        })
        .catch((e) => {
            console.log(e);
        });

    // 업데이트된 내용을 반환합니다. (예: 업데이트 후의 장바구니 목록)
    return { "fac_idx": updateFac.fac_idx, "fac_title": updateFac.fac_title}; // 또는 필요에 따라 업데이트된 내용 반환
};

/*FAQ Category 삭제*/
faqModel.deleteFacItem = async (fac_idx) => {
    const db = database()

    await db('wb_faq_category')
        .where('fac_idx', fac_idx)
        .update({
            fac_status: 'N',
            upd_datetime: currentDatetime
        })
        .catch((e) => {
            console.log(e);
            return false
        });

    return true

}

/*FAQ Category, 실존하는 카테고리인지 검증*/
faqModel.checkFacIdxExist = async(fac_idx) => {
    const db = database();
    let facExist = null;

    if(fac_idx === 'all') {
        return { facExist: '전체 불러오기를 위해 반환' }
    }

    await db
        .select('*')
        .from('wb_faq_category')
        .where('fac_idx', '=', fac_idx)
        .limit(1)
        .then(rows => {
            facExist = (rows.length > 0) ? rows[0] : null; // 전체 데이터를 배열로 가져옴
        })
        .catch((e) => {
            console.log(e);
        });

    return facExist;
};

/* FAQ 글 ----------------------------- */

/*FAQ 글 등록*/
faqModel.addFaqCategoryItem = async(faqData) => {
    const db = database();

    const updateFaqData = {
        fac_idx: faqData.fac_idx,
        faq_title: faqData.faq_title,
        faq_content: faqData.faq_content,
        reg_user: faqData.reg_user,
        reg_datetime: currentDatetime
    }

    await db
        .insert(updateFaqData)
        .into('wb_faq')
        .then((insertedId) => {
            newFAQ  = insertedId;
        })
        .catch((e) => {
            console.log(e);
        });


    return { fac_idx: faqData.fac_idx, faq_idx: newFAQ[0]};
};


/* 카테고리 별 등록된 FAQ 글 목록 조회 */
faqModel.getFaqListById = async (fac_idx, page) => {
    const db = database();
    let faqsArray = {};
    let query;

    if (fac_idx === 'all') {
        // fac_idx가 0이면 특정 조건 없이 전체 데이터를 가져옴
        query = db
            .select('*', 'C.fac_title')
            .from('wb_faq AS Q')
            .join('wb_faq_category AS C', 'Q.fac_idx', 'C.fac_idx')
            .where('Q.faq_status', '=', 'Y')

        faqsArray['totalCount']= await db
            .from('wb_faq AS Q')
            .join('wb_faq_category AS C', 'Q.fac_idx', 'C.fac_idx')
            .where('Q.faq_status', '=', 'Y')
            .count({ totalCount: '*' })
            .then(count => count[0].totalCount)
            .catch(err => console.error(err));
    } else {
        // fac_idx가 0이 아니면 해당 조건에 맞는 데이터만 가져옴
        query = db
            .select('*', 'C.fac_title')
            .from('wb_faq AS Q')
            .join('wb_faq_category AS C', 'Q.fac_idx', 'C.fac_idx')
            .where('Q.fac_idx', '=', fac_idx)
            .andWhere('Q.faq_status', '=', 'Y')

        faqsArray['totalCount']= await db
            .from('wb_faq AS Q')
            .join('wb_faq_category AS C', 'Q.fac_idx', 'C.fac_idx')
            .where('Q.fac_idx', '=', fac_idx)
            .andWhere('Q.faq_status', '=', 'Y')
            .count({ totalCount: '*' })
            .then(count => count[0].totalCount)
            .catch(err => console.error(err));


    }
    if(page > 0) { // 페이지가 0보다 큰 경우 페이지네이션을 적용합니다.
        const itemsPerPage = 10; // 페이지 당 아이템 수
        const offset = (page - 1) * itemsPerPage;
        query = query.limit(itemsPerPage).offset(offset);
    }
    faqsArray['list'] = await query



    return faqsArray;
};

// FAQ 상세보기 정보 조회
faqModel.getFaqById = async(faq_idx) => {
    const db = database();
    let selectedFaq = null;

    await db
        .select('B.*', 'C.fac_title')
        .from('wb_faq AS B')
        .join('wb_faq_category AS C', 'B.fac_idx', 'C.fac_idx')
        .where('faq_idx', '=', faq_idx)
        .andWhere('faq_status', '=', 'Y')
        .limit(1)
        .then(rows => {
            selectedFaq = (rows.length > 0) ? rows[0] : null;
        })
        .catch((e) => {
            console.log(e);
            selectedFaq = null;
        });

    return selectedFaq;
};

/*FAQ 내용 수정*/
faqModel.updateFaqItem = async (updateFaqData) => {
    const db = database();

    await db('wb_faq')
        .where('faq_idx', updateFaqData.faq_idx)
        .update({
            fac_idx: updateFaqData.fac_idx,
            faq_title: updateFaqData.faq_title,
            faq_content: updateFaqData.faq_content,
            upd_user: updateFaqData.upd_user,
            upd_datetime: currentDatetime // 현재 날짜 및 시간 삽입
        })
        .catch((e) => {
            console.log(e);
        });

    // 업데이트된 내용을 반환합니다. (예: 업데이트 후의 장바구니 목록)
    return faqModel.getFaqById(updateFaqData.faq_idx); // 또는 필요에 따라 업데이트된 내용 반환
};

/*FAQ 글 삭제*/
faqModel.deleteFaqItem = async (faq_idx) => {
    const db = database()

    await db('wb_faq')
        .where('faq_idx', faq_idx)
        .update({
            faq_status: 'N',
            upd_datetime: currentDatetime
        })
        .catch((e) => {
            console.log(e);
            return false
        });

    return true

}

module.exports = faqModel
