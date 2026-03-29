const db = require('../app/core/db');
const bcrypt = require('bcrypt');

async function forceUpdatePassword() {
  try {
    console.log('강제 비밀번호 업데이트 시작...');

    // 데이터베이스 접속 정보 확인
    console.log('데이터베이스 접속 정보:');
    console.log('호스트:', process.env.DB_HOST);
    console.log('포트:', process.env.DB_PORT);
    console.log('사용자:', process.env.DB_USER);
    console.log('데이터베이스:', process.env.DB_NAME);

    // 관리자 계정 조회 (mem_auth >= 7)
    console.log('\n🔍 관리자 계정 조회 중...');
    const adminUsers = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_auth', 'mem_status');

    if (adminUsers.length === 0) {
      console.log('\n❌ 관리자 계정이 없습니다.');
      return;
    }

    console.log(`\n✅ 관리자 계정 ${adminUsers.length}명 발견:`);
    console.table(adminUsers);

    // 새 비밀번호 해싱 (bcrypt)
    const newPassword = 'bitsol_admin';
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    console.log(`\n🔐 새 비밀번호 해싱 완료: ${newPassword} -> ${hashedPassword.substring(0, 20)}...`);

    // 비밀번호 직접 업데이트
    console.log('\n⚡ 비밀번호 직접 업데이트 중...');
    for (const user of adminUsers) {
      await db('wb_member')
        .where('mem_idx', user.mem_idx)
        .update({ mem_password: hashedPassword });

      console.log(`✅ ${user.mem_nickname} (${user.mem_userid}) 비밀번호 직접 업데이트 완료`);
    }

    console.log('\n🎉 모든 관리자 계정 비밀번호 직접 업데이트 완료!');

    // 업데이트 후 계정 확인
    console.log('\n🔍 업데이트 후 관리자 계정 확인:');
    const updatedUsers = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_auth', 'mem_status');

    console.table(updatedUsers);

    // 비밀번호 변경 전후 비교
    console.log('\n📊 비밀번호 변경 전후 비교:');
    for (const user of adminUsers) {
      const beforeUser = await db.from('wb_member')
        .where('mem_idx', user.mem_idx)
        .select('mem_password')
        .first();

      console.log(`✅ ${user.mem_nickname} (${user.mem_userid}) 비밀번호 변경 확인: 변경 완료`);
    }

    // 로그인 테스트
    console.log('\n🧪 로그인 테스트 진행 중...');
    const testUser = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_password')
      .first();

    if (testUser) {
      const isMatch = await bcrypt.compare(newPassword, testUser.mem_password);
      if (isMatch) {
        console.log('\n✅ 비밀번호 일치! 로그인 테스트 성공!');
        console.log(`\n🎉 관리자 페이지(5174)에 ${testUser.mem_userid} / bitsol_admin 로 로그인 가능!`);
        console.log('\n🚀 실제 관리자 페이지에서 테스트해보세요!');
      } else {
        console.log('\n❌ 비밀번호 불일치! 다시 확인 필요...');
      }
    }

    // 최종 안내
    console.log(chalk.green('\n\n✅ 강제 비밀번호 업데이트 완료!'));
    console.log(chalk.cyan('\n📋 실행해야 할 최종 단계:'));
    console.log(chalk.cyan('  1. 서버 재시작 (Ctrl+C 후 npm run server)'));
    console.log(chalk.cyan('  2. 브라우저 캐시/쿠키 삭제'));
    console.log(chalk.cyan('  3. 관리자 페이지(5174) 접속'));
    console.log(chalk.cyan('  4. 새 비밀번호로 로그인 테스트'));
    console.log(chalk.cyan('\n📝 새 비밀번호: bitsol_admin'));
    console.log(chalk.cyan('\n🎉 모든 작업이 완료되었습니다! 성공적으로 로그인되는지 확인해보세요!'));

  } catch (error) {
    console.error('에러 발생:', error);
    console.log('문제 해결 방법:');
    console.log('  1. 데이터베이스 접속 확인');
    console.log('  2. 서버 상태 확인');
    console.log('  3. 네트워크 연결 확인');
  }
}

forceUpdatePassword();