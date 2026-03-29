const db = require('../app/core/db');
const bcrypt = require('bcrypt');
const chalk = require('chalk');

async function completeSolution() {
  try {
    console.log(chalk.cyan('\n🚀 완전한 관리자 비밀번호 변경 솔루션 시작...'));

    // 1. bcrypt 설치 확인
    try {
      require.resolve('bcrypt');
      console.log(chalk.green('✅ bcrypt 모듈 확인 완료'));
    } catch (e) {
      console.log(chalk.red('❌ bcrypt 모듈이 설치되지 않았습니다. 설치 중...'));
      const { execSync } = require('child_process');
      execSync('npm install bcrypt', { cwd: __dirname + '/../', stdio: 'inherit' });
      console.log(chalk.green('✅ bcrypt 설치 완료'));
    }

    // 2. 관리자 계정 조회
    console.log(chalk.yellow('\n🔍 관리자 계정 조회 중...'));
    const adminUsers = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_auth', 'mem_status');

    if (adminUsers.length === 0) {
      console.log(chalk.red('\n❌ 관리자 계정이 없습니다.'));
      return;
    }

    console.log(chalk.green(`\n✅ 관리자 계정 ${adminUsers.length}명 발견:`));
    console.table(adminUsers);

    // 3. 새 비밀번호 해싱 (bcrypt)
    const newPassword = 'bitsol_admin';
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    console.log(chalk.yellow(`\n🔐 새 비밀번호 해싱 완료: ${newPassword} -> ${hashedPassword.substring(0, 20)}...`));

    // 4. 비밀번호 직접 업데이트
    console.log(chalk.yellow('\n⚡ 비밀번호 직접 업데이트 중...'));
    for (const user of adminUsers) {
      await db('wb_member')
        .where('mem_idx', user.mem_idx)
        .update({ mem_password: hashedPassword });

      console.log(chalk.green(`✅ ${user.mem_nickname} (${user.mem_userid}) 비밀번호 업데이트 완료`));
    }

    console.log(chalk.green('\n🎉 모든 관리자 계정 비밀번호 직접 업데이트 완료!'));

    // 5. 업데이트 후 확인
    console.log(chalk.yellow('\n🔍 업데이트 후 관리자 계정 확인:'));
    const updatedUsers = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_auth', 'mem_status');

    console.table(updatedUsers);

    // 6. 서버 재시작 안내
    console.log(chalk.yellow('\n🔄 서버 재시작 필요:'));
    console.log(chalk.cyan('  1. 현재 서버 중지 (Ctrl+C)'));
    console.log(chalk.cyan('  2. 다음 명령어로 서버 재시작:'));
    console.log(chalk.cyan('     npm run server'));

    // 7. 세션 초기화 안내
    console.log(chalk.yellow('\n🧹 세션 초기화 필요:'));
    console.log(chalk.cyan('  1. 브라우저 캐시 삭제'));
    console.log(chalk.cyan('  2. 쿠키 삭제 또는 시크릿 모드 사용'));
    console.log(chalk.cyan('  3. 로그아웃 후 다시 로그인'));

    // 8. 로그인 테스트 스크립트 실행
    console.log(chalk.yellow('\n🧪 로그인 테스트 진행 중...'));
    const testUser = await db.from('wb_member')
      .where('mem_auth', '>=', 7)
      .select('mem_idx', 'mem_userid', 'mem_nickname', 'mem_password')
      .first();

    if (testUser) {
      const isMatch = await bcrypt.compare(newPassword, testUser.mem_password);
      if (isMatch) {
        console.log(chalk.green('\n✅ 비밀번호 일치! 로그인 테스트 성공!'));
        console.log(chalk.cyan(`\n🎉 관리자 페이지(5174)에 ${testUser.mem_userid} / bitsol_admin 로 로그인 가능!`));
        console.log(chalk.cyan('\n🚀 실제 관리자 페이지에서 테스트해보세요!'));
      } else {
        console.log(chalk.red('\n❌ 비밀번호 불일치! 다시 확인 필요...'));
      }
    }

    // 9. 최종 안내
    console.log(chalk.green('\n\n✅ 완전한 솔루션 완료!'));
    console.log(chalk.cyan('\n📋 실행해야 할 최종 단계:'));
    console.log(chalk.cyan('  1. 서버 재시작 (위 안내 참조)'));
    console.log(chalk.cyan('  2. 브라우저 캐시/쿠키 삭제'));
    console.log(chalk.cyan('  3. 관리자 페이지(5174) 접속'));
    console.log(chalk.cyan('  4. 새 비밀번호로 로그인 테스트'));
    console.log(chalk.cyan('\n📝 새 비밀번호: bitsol_admin'));
    console.log(chalk.cyan('\n🎉 모든 작업이 완료되었습니다! 성공적으로 로그인되는지 확인해보세요!'));

  } catch (error) {
    console.error(chalk.red('\n❌ 에러 발생:'), error);
    console.log(chalk.red('\n🔍 문제 해결 방법:'));
    console.log(chalk.cyan('  1. 데이터베이스 접속 정보 확인'));
    console.log(chalk.cyan('  2. 서버 상태 확인'));
    console.log(chalk.cyan('  3. 네트워크 연결 확인'));
  }
}

completeSolution();