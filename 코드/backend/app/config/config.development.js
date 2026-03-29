module.exports = {
  apiVersion: 'v1',
  appPort: 6006, /*local에서 번호 겹치지 않도록 설정*/
  secretKey: 'wheeparam',
  database: {
    host: '', // SQL 서버 IP 입력
    username: '', // SQL 서버 계정
    password: '', // SQL 서버 비밀번호
    port: 3306,
    database: 'bs-academy' /* local에서 사용할 DB명 */
  },
  cors: {
    origin: true,
    credentials: true
  },
  apiUrl: 'http://localhost:6006/v1', /*appPort와 번호 맞추기*/
  jwt: {
    accessTokenExpire: '15m',
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
