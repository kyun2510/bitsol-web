module.exports = {
  apiVersion: 'v1',
  appPort: 6006, /*서버에서 번호 겹치지 않도록 설정*/
  secretKey: 'wheeparam',
  database: {
    host: '127.0.0.1',
    username: 'hagunbiz', // SQL 서버 계정
    password: 'Gkrns123!@#', // SQL 서버 비밀번호
    port: 3306,
    database: 'bs-academy' /*서버에서 사용할 DB명*/
  },
  cors: {
    origin: true,
    credentials: true
  },
  apiUrl: '/v1', /*실제 사용할 서버 도메인 주소 입력*/
  jwt: {
    accessTokenExpire: '2h',
    refreshTokenExpire: '14d',
  },
  auth: { //클라이언트 관리자 메일 입력
    emailUser: 'gusals8855@gmail.com',
    emailPassword: 'getn ntgw twmh flqb'
  },
  imp: {
    key: '',
    secret: ''
  }
}
