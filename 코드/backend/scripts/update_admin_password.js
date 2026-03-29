const db = require('../app/core/db');
const bcrypt = require('bcrypt');

async function updateAdminPassword() {
  try {
    console.log('관리자 계정 조회 및 비밀번호 업데이트 중...');

    // 관리자 계정 조회 (mem_auth >= 7)
    const adminUsers = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_auth', 'mem_status');

    if (adminUsers.length === 0) {
      console.log('\n❌ 관리자 계정이 없습니다.');
      return;
    }

    console.log(`\n✅ 관리자 계정 ${adminUsers.length}명 발견:`);
    console.table(adminUsers);

    // 새 비밀번호 해싱
    const newPassword = 'bitsol_admin';
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    console.log(`\n🔐 새 비밀번호 해싱 완료: ${newPassword} -> ${hashedPassword.substring(0, 20)}...`);

    // 비밀번호 업데이트
    for (const user of adminUsers) {
      await db('wb_member')
        .where('mem_idx', user.mem_idx)
        .update({ mem_password: hashedPassword });

      console.log(`✅ ${user.mem_nickname} (${user.mem_userid}) 비밀번호 업데이트 완료`);
    }

    console.log('\n🎉 모든 관리자 계정 비밀번호 업데이트 완료!');

    // 업데이트 후 계정 확인
    console.log('\n🔍 업데이트 후 관리자 계정 확인:');
    const updatedUsers = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_auth', 'mem_status');

    console.table(updatedUsers);

    console.log('\n✅ 작업 완료! 새 비밀번호로 로그인 테스트를 진행하세요.');
    console.log(`\n📝 새 비밀번호: ${newPassword}`);
    console.log('\n🚀 관리자 페이지(5174)에 접속하여 로그인 테스트를 진행하세요.');

  } catch (error) {
    console.error('에러 발생:', error);
  }
}

updateAdminPassword();