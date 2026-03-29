const quickcontactModel = loadModule('quickcontact', 'model');
const path = require('path');
const quickcontactController = {};

quickcontactController.getAllContacts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // 페이지 쿼리가 없다면 기본값은 1입니다.
        const pagerow = parseInt(req.query.pagerow) || 10; // 페이지 쿼리가 없다면 기본값은 10입니다.

        const quickcontacts = await quickcontactModel.getAllContacts(page, pagerow);
        const totalContacts = await quickcontactModel.getTotalContacts(); // 총 개수를 가져오는 함수

        if (!quickcontacts || quickcontacts.length === 0) {
            console.log("공지글이 없습니다");
            return res.status(200).json({ contacts: [], total_count: 0 });
        }

        return res.status(200).json({ contacts: quickcontacts, total_count: totalContacts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// 상담 추가
quickcontactController.addContact = async (req, res) => {
    try {
        const contactData = req.body;
        // console.log(contactData, "여기 문의 게시글 ")
        const result = await quickcontactModel.addContactItem(contactData);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 상담 특정 게시글 
quickcontactController.getContactById = async (req, res) => {
    try {
        const { not_id } = req.params;
        const contact = await quickcontactModel.getContactById(not_id);
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// 공지글 삭제 
quickcontactController.deleteContact = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await quickcontactModel.deleteContact(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = quickcontactController;
