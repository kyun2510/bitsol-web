const db = database();
const quickcontactModel = {};
const moment = require('moment-timezone');

const getKoreanTime = () => {
    // 'Asia/Seoul' 시간대를 사용하여 현재 한국 시간을 얻습니다.
    return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
}

const currentDatetime = getKoreanTime() 

// 전부 가져오기 
quickcontactModel.getAllContacts = async (page, pagerow) => {
    let contacts = [];
    let query = db
        .select('*')
        .from('bs_quickcontact')
        .where('qc_status', 'Y')
        .orderBy('qc_datetime', 'desc');

    if (page > 0) { // 페이지가 0보다 큰 경우 페이지네이션을 적용합니다.
        const itemsPerPage = pagerow; // 페이지 당 아이템 수
        const offset = (page - 1) * itemsPerPage;
        query = query.limit(itemsPerPage).offset(offset);
    }

    await query.then(rows => {
        // console.log('DB rows:', rows); // 데이터베이스 쿼리 결과를 로그로 출력
        contacts = (rows.length > 0) ? rows : [];
    }).catch(e => {
        console.error(e);
        contacts = null;
    });

    return contacts;
};

quickcontactModel.getTotalContacts = async () => {
    let totalContacts = 0;
    await db('bs_quickcontact')
        .count('qc_id as total')
        .where('qc_status', 'Y')
        .then(rows => {
            totalContacts = rows[0].total;
        })
        .catch(e => {
            console.error(e);
            totalContacts = 0;
        });

    return totalContacts;
};






// 문의하기 추가 
quickcontactModel.addContactItem = async (contactData) => {
    let result;

    let query = db('bs_quickcontact')
        .insert({
            qc_name: contactData.qc_name,
            qc_phone: contactData.qc_phone,
            qc_field: contactData.qc_field,
            qc_datetime: currentDatetime,
            qc_status: 'Y',
        });

    await query.then(res => {
        result = res;
    }).catch(e => {
        console.error(e);
        result = null;
    });

    // 관리자가 보는 문의 목록(wb_inquiry)에도 동일 건을 추가합니다.
    try {
        const inquiryTitle = contactData.qc_name || '빠른 문의'; // 사용자명을 제목으로 사용
        const inquiryContent = `[빠른 문의]\n\n지점: ${contactData.qc_location || ''}\n\n학년/나이: ${contactData.qc_field || ''}\n\n연락처: ${contactData.qc_phone || ''}\n\n문의 내용:\n${contactData.qc_content || ''}\n\n문의 접수 시간: ${getKoreanTime()}`;

        await db('wb_inquiry').insert({
            cst_status: 'Y',
            cst_step: '답변대기',
            cat_id: 1,
            cst_regtime: db.fn.now(), // 실제 현재 시간 저장
            mem_idx: 0,
            cst_phone: contactData.qc_phone || '',
            cst_email: '',
            cst_title: inquiryTitle,
            cst_content: inquiryContent,
            cst_ext1: contactData.qc_location || '' // 지점 정보 저장
        }).catch(e => {
            console.error('Failed to insert into wb_inquiry:', e);
        });
    } catch (e) {
        console.error('wb_inquiry insert error:', e);
    }
    return result;
};

// 특정 문의하기 
quickcontactModel.getContactById = async (id) => {
    let contact;
    let query = db
        .select('*')
        .from('bs_quickcontact')
        .where('qc_id', id)
        .andWhere('qc_status', 'Y');

    await query.then(rows => {
        contact = rows[0];
    }).catch(e => {
        console.error(e);
        contact = null;
    });

    return contact;
};

// 문의하기글 지우기
quickcontactModel.deleteContact = async (id) => {
    try {
        const deletePost = await db('bs_quickcontact')
            .where('qc_id', id)
            .update({ qc_status: 'N' }); // qc_status를 'N'으로 업데이트

        return deletePost;
    } catch (error) {
        console.error("Failed to delete post:", error);
        return false;
    }
};

module.exports = quickcontactModel;