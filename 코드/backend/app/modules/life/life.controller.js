const lifeModel = loadModule('life', 'model')
const lifeController = {};
const path = require('path');


// 모든 공지글 조회
lifeController.getPostList = async (req, res) => {
    try {
        const page = req.query.page || 0; // 페이지 쿼리가 없다면 기본값은 0입니다.
        const posts = await lifeModel.getPosts(page);
    if (posts === null) {
        console.log("공지글이 없습니다")
        return res.status(200).json(null);
    }
        return res.json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        return res.status(500).json({ error: "Failed to fetch posts" });
    }
};
// 공지글 개별 조회
lifeController.getPost = async (req, res) => {
    try {
        const not_id = req.params.not_id;
        // console.log(req.params.not_id)
        if (!not_id) {
            return res.status(503).send("조회할 공지의 PK 번호를 찾을 수 없습니다.");
        }

        const post = await lifeModel.getPostById(not_id);

        // console.log('post:')
        // console.log(post)

        if (!post) {
            return res.status(503).send("Post not found");
        }
        return res.json(post);

    } catch (error) {
        console.error("Error fetching post:", error);
        return res.status(500).json({ error: "Failed to fetch post" });
    }
};
// 공지글 쓰기v
lifeController.submitPost = async (req, res) => {
    try {
        const {title, subtitle, content} = req.body;

        if (!title || !subtitle || !content) {
            return res.status(400).json({ error: "글 작성에 필요한 값을 보내주세요." });
        }
        const post = await lifeModel.addPost(title, subtitle, content);

        if (!post) {
            return res.status(503).json({ error: "post없음" });
        }

        return res.status(200).json(post);
    } catch (error) {
        console.error("Error adding post:", error);
        return res.status(500).json({ error: "공지 추가 실패" });
    }
};
//공지글 수정하기v
lifeController.editPost = async (req, res) => {
    try {
        const mem_idx = req.loginUser.id ?? null;

        if(!mem_idx){
            return res.status(503).json({ error: "로그인 멤버만 사용 가능한 기능입니다." });
        }
        // console.log('req.body')
        // console.log(req.body)
        const updateData = req.body;

        if(!updateData.not_id){
            return res.status(503).json({ error: "수정할 게시글 pk값이 없습니다." });
        }

        // console.log(updateData)
        const updated = await lifeModel.updatePost(updateData);

        if (!updated) {
            return res.status(500).json({ error: "업데이트 데이터 없음" });
        }

        return res.json({"success": true, "updateData": updated}
        );
    } catch (error) {
        console.error("Error editing post:", error);
        return res.status(500).json({ error: "Failed to edit post" });
    }
};

//공지글 삭제하기v
lifeController.deletePost = async (req, res) => {
    try {
        const deleteIdxsList = req.body.deleteIdxsList;

        if (deleteIdxsList.length === 0) {
            return res.status(400).json({error: '삭제할 카테고리 아이템이 없습니다.'});
        }

        // deleteIdsList 배열에 있는 각 faq_id를 사용하여 해당 행의 faq_status를 "취소"로 업데이트합니다.
        for (const idx of deleteIdxsList) {
            const deletedResult = await lifeModel.deletePost(idx);

            if(!deletedResult){
                return res.status(503).json({ error: `${idx}번 째 게시글 삭제 실패` });
            }
        }

        return res.json({"success": true, "message": "게시글 삭제 완료"})

    } catch (error) {
        console.error("Error deleting post:", error);
        return res.status(500).json({ success: false, message: '삭제 도중 에러 발생' });
    }
};

// ... 다른 컨트롤러 함수들 ...

module.exports = lifeController;
