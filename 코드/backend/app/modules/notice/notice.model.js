const noticeModel = {};
const db = database();
const moment = require('moment-timezone');

const getKoreanTime = () => {
    // 'Asia/Seoul' 시간대를 사용하여 현재 한국 시간을 얻습니다.
    return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
}

const currentDatetime = getKoreanTime() // 현재 날짜 및 시간 얻기

// 공지 작성하기(쓰기)v
noticeModel.addPost = async (title,subtitle,content) => {
    const db = database();

    let postId = null;
    await db('wb_notice').insert({
        not_title:title,
        not_content: content,
        not_subtitle: subtitle,
        not_status : 'Y',
        not_datetime: currentDatetime,
        // mem_idx: mem_idx
    })
    .then((row) => {
        postId = row
    })
    .catch((e) => {
        console.log(e);
        postId = null;
    });

    return postId;
};
//공지글 수정하기 (PUT)v
noticeModel.updatePost = async (updateData) => {
    const db = database();    
    let result = null;

    // console.log('updateData')
    // console.log(updateData, '???')

    await db('wb_notice')
        .where('not_id', updateData.not_id)
        .whereNot('not_status', 'N')
        .update({
            not_title: updateData.not_title,
            not_content: updateData.not_content,
            not_subtitle: updateData.not_subtitle,
            thumb_filepath: updateData.thumb_filepath,
            not_status : "Y"
        })
        .then((rows) => {
            console.log('rows')
            // console.log(rows)
            result = true;
        })
        .catch((e) => {
            console.log(e);
            result = false;
        });

    return await noticeModel.getPostById(updateData.not_id);
};
// 공지글들 가져오기
noticeModel.getPosts = async (page = 1, pagerow = 10) => {
    const db = database();
    let posts = [];
    let totalCount = 0;
    const offset = (page - 1) * pagerow;

    // Get total count of posts
    await db('wb_notice')
        .count('* as count')
        .where('not_status', 'Y')
        .then(rows => {
            totalCount = rows[0].count;
        })
        .catch(e => {
            console.error(e);
            totalCount = 0;
        });

    // Get paginated posts ordered by not_datetime and not_id in descending order
    await db('wb_notice')
        .select('*')
        .where('not_status', 'Y')
        .orderBy([
            { column: 'not_datetime', order: 'desc' },
            { column: 'not_id', order: 'desc' }
        ])
        .limit(pagerow)
        .offset(offset)
        .then(rows => {
            posts = rows.length > 0 ? rows : [];
        })
        .catch(e => {
            console.error(e);
            posts = [];
        });

    return { posts, totalCount };
};



// 공지글 개별 조회
noticeModel.getPostById = async (not_id) => {
    const db = database();
    let post = null;

    await db
        .select('N.*')
        .from('wb_notice AS N')
        .where('N.not_id', not_id)
        .whereNot('N.not_status', "N")
        .then(row => {
            // console.log('row:')
            // console.log(row)
            post = row? row[0] : null;
        })
        .catch(e => {
            console.error(e);
            post = null;
        });
    return post;
};
//게시글 지우기v
noticeModel.deletePost = async (not_id) => {
    try {
        const deletePost = await db('wb_notice')
            .where('not_id', not_id)
            .update({ not_status: 'N' });

        return deletePost;
    } catch (error) {
        console.error("Failed to delete post:", error);
        return false;
    }
};

module.exports = noticeModel;
