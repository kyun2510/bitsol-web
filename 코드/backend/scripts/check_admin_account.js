const db = require('../app/core/db');

async function checkAdminAccount() {
  try {
    console.log('관리자 계정 조회 중...');
    
    const adminUser = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_userid', 'mem_nickname', 'mem_auth', 'mem_status')
      .limit(1)
      .first();

    if (adminUser) {
      console.log('\n✅ 관리자 계정 발견:');
      console.log(`ID: ${adminUser.mem_userid}`);
      console.log(`닉네임: ${adminUser.mem_nickname}`);
      console.log(`권한 레벨: ${adminUser.mem_auth}`);
      console.log(`상태: ${adminUser.mem_status}`);
    } else {
      console.log('\n❌ 관리자 계정이 없습니다.');
      console.log('\n전체 계정 목록:');
      const allUsers = await db.from('wb_member')
        .select('mem_userid', 'mem_nickname', 'mem_auth', 'mem_status')
        .limit(5);
      console.table(allUsers);
    }

    process.exit(0);
  } catch (error) {
    console.error('에러 발생:', error);
    process.exit(1);
  }
}

checkAdminAccount();
