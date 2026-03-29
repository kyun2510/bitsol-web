const db = require('../app/core/db');
const bcrypt = require('bcrypt');

async function testLogin() {
  try {
    console.log('로그인 테스트 시작...');

    // 테스트할 관리자 계정 (임의로 선택하거나 사용자에게 물어보기)
    // 여기서는 첫 번째 관리자 계정을 테스트합니다
    const testUser = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_password')
      .first();

    if (!testUser) {
      console.log('\n❌ 테스트할 관리자 계정이 없습니다.');
      return;
    }

    console.log(`\n🔍 테스트할 계정: ${testUser.mem_nickname} (${testUser.mem_userid})`);

    // 새 비밀번호로 로그인 테스트
    const inputPassword = 'bitsol_admin';
    const storedPassword = testUser.mem_password;

    const isMatch = await bcrypt.compare(inputPassword, storedPassword);

    if (isMatch) {
      console.log('\n✅ 비밀번호 일치! 로그인 성공!');
      console.log(`\n🎉 관리자 페이지(5174)에 ${testUser.mem_userid} / bitsol_admin 로 로그인 가능`);
      console.log('\n🚀 실제 관리자 페이지에서 테스트해보세요!');
    } else {
      console.log('\n❌ 비밀번호 불일치! 로그인 실패...');
      console.log('\n🔍 비밀번호가 제대로 업데이트 되었는지 확인하세요.');
    }

  } catch (error) {
    console.error('에러 발생:', error);
  }
}

testLogin();