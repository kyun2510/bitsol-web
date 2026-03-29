# 빛솔학원 (BS Academy) - 풀스택 프로젝트

Node.js Express 백엔드 API, React 사용자 프론트엔드, React 관리자 페이지로 구성된 빛솔학원 사이트 프로젝트입니다.

## 📋 목차

1. [프로젝트 구조](#프로젝트-구조)
2. [사전 요구사항](#사전-요구사항)
3. [초기 설정](#초기-설정)
4. [환경 설정](#환경-설정)
5. [실행 방법](#실행-방법)
6. [데이터베이스 초기화](#데이터베이스-초기화)
7. [배포 가이드](#배포-가이드)
8. [주요 기능](#주요-기능)
9. [문제 해결](#문제-해결)

---

## 🏗 프로젝트 구조

```
bs-academy-node/
├── backend/              # Node.js Express 백엔드 API
│   ├── app/
│   │   ├── config/      # 환경별 설정 파일
│   │   ├── core/        # 핵심 시스템 (라우팅, DB 연결)
│   │   ├── helpers/     # 공통 유틸리티 함수
│   │   ├── libraries/   # 파일 업로드 등 라이브러리
│   │   ├── modules/     # 기능별 모듈 (컨트롤러, 모델, 라우트)
│   │   └── data/        # 업로드된 파일 저장소
│   └── package.json
│
├── frontend/            # React + Vite 사용자 프론트엔드 (웹사이트)
│   ├── src/
│   │   ├── components/  # 기능별 컴포넌트
│   │   │   ├── Main/    # 메인 페이지 섹션들
│   │   │   ├── Notice/  # 공지사항
│   │   │   ├── Life/    # 학원 생활
│   │   │   ├── Vision/  # 비전
│   │   │   ├── Contact/ # 문의
│   │   │   └── TyUHeader/ # 헤더
│   │   ├── routes/      # 라우팅 설정
│   │   └── assets/      # 정적 리소스
│   └── package.json
│
└── admin/               # React + Vite 관리자 페이지
    ├── src/
    │   ├── components/  # 기능별 컴포넌트
    │   ├── routes/      # 라우팅 설정
    │   ├── store/       # Redux 상태 관리
    │   └── features/    # 공통 UI 컴포넌트
    └── package.json
```

---

## 💻 사전 요구사항

프로젝트를 실행하기 전에 다음 소프트웨어가 설치되어 있어야 합니다:

- **Node.js**: v16.x 이상 (권장: v18.x)
- **npm**: v8.x 이상
- **MySQL**: v5.7 이상 또는 MariaDB
- **Git**: 버전 관리용

### Node.js 설치 확인
```bash
node --version
npm --version
```

---

## 🚀 초기 설정

### 1. 저장소 클론

```bash
git clone <repository-url>
cd bs-academy-node
```

### 2. 백엔드 의존성 설치

```bash
cd backend
npm install
```

### 3. 사용자 프론트엔드 의존성 설치

```bash
cd ../frontend
npm install
```

### 4. 관리자 페이지 의존성 설치

```bash
cd ../admin
npm install
```

---

## ⚙️ 환경 설정

### 백엔드 설정

백엔드는 개발 환경과 프로덕션 환경에 따라 다른 설정 파일을 사용합니다.

#### 1. 개발 환경 설정 (`backend/app/config/config.development.js`)

로컬 개발 환경에서 사용하는 설정입니다.

```javascript
module.exports = {
  apiVersion: 'v1',
  appPort: 6006,                    // 로컬 포트 번호 (충돌 시 변경)
  secretKey: 'wheeparam',           // JWT 암호화 키 (변경 권장)
  database: {
    host: 'localhost',              // ⚠️ MySQL 서버 IP 입력
    username: 'root',               // ⚠️ MySQL 사용자명
    password: 'your_password',      // ⚠️ MySQL 비밀번호
    port: 3306,
    database: 'bs-academy'          // ⚠️ 사용할 DB명
  },
  cors: {
    origin: true,
    credentials: true
  },
  apiUrl: 'http://localhost:6006/v1',  // appPort와 맞춰야 함
  jwt: {
    accessTokenExpire: '15m',       // 액세스 토큰 만료 시간
    refreshTokenExpire: '14d',      // 리프레시 토큰 만료 시간
  },
  auth: {
    emailUser: 'your-email@gmail.com',      // ⚠️ 이메일 발송용 Gmail 주소
    emailPassword: 'your-app-password'      // ⚠️ Gmail 앱 비밀번호
  },
  imp: {
    key: '',                        // 아임포트 결제 연동 시 사용
    secret: ''
  }
}
```

#### 2. 프로덕션 환경 설정 (`backend/app/config/config.production.js`)

실제 서버에 배포 시 사용하는 설정입니다.

```javascript
module.exports = {
  apiVersion: 'v1',
  appPort: 6006,                    // 서버 포트 (충돌 시 변경)
  secretKey: 'wheeparam',           // ⚠️ 프로덕션용 강력한 키로 변경 필수
  database: {
    host: '127.0.0.1',              // ⚠️ 실제 DB 서버 IP
    username: 'db_user',            // ⚠️ DB 사용자명
    password: 'strong_password',    // ⚠️ DB 비밀번호
    port: 3306,
    database: 'bs-academy'          // ⚠️ DB명
  },
  cors: {
    origin: true,                   // 특정 도메인만 허용하려면 배열로 지정
    credentials: true
  },
  apiUrl: 'https://yourdomain.com/v1',  // ⚠️ 실제 서버 도메인 입력
  jwt: {
    accessTokenExpire: '2h',
    refreshTokenExpire: '14d',
  },
  auth: {
    emailUser: 'your-email@gmail.com',
    emailPassword: 'your-app-password'
  },
  imp: {
    key: '',
    secret: ''
  }
}
```

### 사용자 프론트엔드 설정

사용자 프론트엔드는 백엔드 API URL을 설정해야 합니다.

#### API 엔드포인트 설정

`frontend/src/` 폴더의 API 호출 부분에서 백엔드 URL을 확인하세요:

```javascript
// 예시
const API_BASE_URL = 'http://localhost:6006/v1'; // 개발 환경
// const API_BASE_URL = 'https://yourdomain.com/v1'; // 프로덕션 환경
```

#### 주요 라이브러리

- **GSAP**: 애니메이션 효과
- **Swiper**: 슬라이드/캐러셀 구현
- **Three.js / React Three Fiber**: 3D 그래픽
- **React Router**: 페이지 라우팅

### 관리자 페이지 설정

관리자 페이지는 백엔드 API URL을 설정해야 합니다.

#### API 엔드포인트 설정

`admin/src/store/` 폴더의 각 슬라이스 파일에서 API 베이스 URL을 확인하세요:

```javascript
// 예시: userSlice.js
const API_BASE_URL = 'http://localhost:6006/v1'; // 개발 환경
// const API_BASE_URL = 'https://yourdomain.com/v1'; // 프로덕션 환경
```

### Gmail 앱 비밀번호 생성 방법

이메일 인증 기능을 위해 Gmail 앱 비밀번호가 필요합니다:

1. Google 계정 설정 → 보안
2. 2단계 인증 활성화
3. "앱 비밀번호" 생성
4. 생성된 16자리 비밀번호를 `auth.emailPassword`에 입력

---

## 🎯 실행 방법

### 개발 환경 실행

#### 1. 백엔드 서버 실행 (개발 모드)

```bash
cd backend
npm run dev
```

- nodemon이 자동으로 코드 변경을 감지하여 서버를 재시작합니다.
- 기본 주소: `http://localhost:6006`
- API 엔드포인트: `http://localhost:6006/v1/`

#### 2. 사용자 프론트엔드 실행 (개발 모드)

새 터미널 창을 열어서:

```bash
cd frontend
npm run dev
```

- Vite 개발 서버가 실행됩니다.
- 기본 주소: `http://localhost:5173` (Vite 기본 포트)
- Hot Module Replacement (HMR) 지원
- **실제 웹사이트 화면이 표시됩니다**

#### 3. 관리자 페이지 실행 (개발 모드) - 선택사항

관리자 페이지도 필요한 경우 또 다른 터미널 창에서:

```bash
cd admin
npm run dev
```

- 포트 충돌이 발생하면 자동으로 다음 포트(5174)를 사용합니다.
- 관리자 전용 관리 화면이 표시됩니다.

### 프로덕션 환경 실행

#### 1. 백엔드 서버 실행 (프로덕션 모드)

```bash
cd backend
npm run server
```

#### 2. 사용자 프론트엔드 빌드 및 배포

```bash
cd frontend
npm run build
```

- 빌드된 파일은 `frontend/dist/` 폴더에 생성됩니다.
- Nginx, Apache 등의 웹 서버를 통해 `dist/` 폴더 안의 파일들을 서빙합니다.

#### 3. 관리자 페이지 빌드 및 배포

```bash
cd admin
npm run build
```

- 빌드된 파일은 `admin/dist/` 폴더에 생성됩니다.
- Nginx, Apache 등의 웹 서버를 통해 `dist/` 폴더 안의 파일들을 서빙합니다.

---

## 🗄️ 데이터베이스 초기화

### 1. MySQL 데이터베이스 생성

MySQL에 접속하여 데이터베이스를 생성합니다:

```sql
CREATE DATABASE `bs-academy` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 2. 백엔드 서버 실행

```bash
cd backend
npm run dev
```

### 3. 초기화 엔드포인트 접속

브라우저에서 다음 URL로 접속:

```
http://localhost:6006/v1/init
```

- 이 엔드포인트는 필요한 테이블과 초기 데이터를 자동으로 생성합니다.
- **⚠️ 주의**: 이 작업은 한 번만 실행하세요. 중복 실행 시 오류가 발생할 수 있습니다.

### 4. 초기화 확인

MySQL에 접속하여 테이블이 생성되었는지 확인:

```sql
USE `bs-academy`;
SHOW TABLES;
```

---

## 🚢 배포 가이드

### 서버 환경 준비

1. **Node.js 설치**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **MySQL 설치 및 설정**
   ```bash
   sudo apt-get install mysql-server
   sudo mysql_secure_installation
   ```

3. **프로젝트 업로드**
   ```bash
   git clone <repository-url>
   cd bs-academy-node
   ```

### 백엔드 배포

1. **의존성 설치**
   ```bash
   cd backend
   npm install --production
   ```

2. **프로덕션 설정 파일 수정**
   ```bash
   nano app/config/config.production.js
   # 데이터베이스 정보, 도메인 등 수정
   ```

3. **PM2로 서버 관리** (권장)
   ```bash
   sudo npm install -g pm2
   pm2 start app/index.js --name bs-academy-backend
   pm2 startup
   pm2 save
   ```

4. **서버 상태 확인**
   ```bash
   pm2 status
   pm2 logs bs-academy-backend
   ```

### 사용자 프론트엔드 배포 (메인 웹사이트)

#### 방법 1: 직접 배포 (권장)

1. **로컬에서 빌드**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **dist 폴더 배포**
   - 빌드 완료 후 `frontend/dist/` 폴더가 생성됩니다
   - **`dist` 폴더 안의 모든 파일을 서버의 웹 루트 디렉토리로 복사**합니다

   예시:
   ```bash
   # dist 폴더 내용을 서버로 전송
   scp -r frontend/dist/* user@server:/var/www/html/

   # 또는 FTP/SFTP 클라이언트를 사용하여 dist 폴더 안의 파일들을 업로드
   ```

3. **중요**: `dist` 폴더 자체가 아닌, **dist 폴더 안의 파일들**을 배포해야 합니다
   ```
   ❌ 잘못된 예: /var/www/html/dist/index.html
   ✅ 올바른 예: /var/www/html/index.html
   ```

#### 방법 2: 서버에서 직접 빌드

1. **서버에 프로젝트 업로드 후 빌드**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **웹 서버 설정 (Nginx 예시)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       # 사용자 프론트엔드 - dist 폴더 안의 내용을 서빙
       location / {
           root /var/www/bs-academy-node/frontend/dist;
           try_files $uri $uri/ /index.html;
       }

       # 백엔드 API 프록시
       location /v1 {
           proxy_pass http://localhost:6006;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Nginx 재시작**
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### 관리자 페이지 배포

관리자 페이지는 별도 서브도메인이나 경로에 배포하는 것을 권장합니다.

#### 방법 1: 직접 배포 (권장)

1. **로컬에서 빌드**
   ```bash
   cd admin
   npm install
   npm run build
   ```

2. **dist 폴더 배포**
   - 빌드 완료 후 `admin/dist/` 폴더가 생성됩니다
   - **`dist` 폴더 안의 모든 파일을 서버의 웹 루트 디렉토리로 복사**합니다

   예시:
   ```bash
   # dist 폴더 내용을 서버로 전송
   scp -r admin/dist/* user@server:/var/www/html/

   # 또는 FTP/SFTP 클라이언트를 사용하여 dist 폴더 안의 파일들을 업로드
   ```

3. **중요**: `dist` 폴더 자체가 아닌, **dist 폴더 안의 파일들**을 배포해야 합니다
   ```
   ❌ 잘못된 예: /var/www/html/dist/index.html
   ✅ 올바른 예: /var/www/html/index.html
   ```

#### 방법 2: 서버에서 직접 빌드

1. **서버에 프로젝트 업로드 후 빌드**
   ```bash
   cd admin
   npm install
   npm run build
   ```

2. **웹 서버 설정 (Nginx 예시 - 서브도메인 사용)**
   ```nginx
   # 관리자 페이지 전용 서브도메인
   server {
       listen 80;
       server_name admin.yourdomain.com;

       # 관리자 페이지 - dist 폴더 안의 내용을 서빙
       location / {
           root /var/www/bs-academy-node/admin/dist;
           try_files $uri $uri/ /index.html;
       }

       # 백엔드 API 프록시
       location /v1 {
           proxy_pass http://localhost:6006;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   **또는 경로로 분리하는 경우:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       # 메인 사이트
       location / {
           root /var/www/bs-academy-node/frontend/dist;
           try_files $uri $uri/ /index.html;
       }

       # 관리자 페이지 (별도 경로)
       location /admin {
           alias /var/www/bs-academy-node/admin/dist;
           try_files $uri $uri/ /admin/index.html;
       }

       # 백엔드 API 프록시
       location /v1 {
           proxy_pass http://localhost:6006;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Nginx 재시작**
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

#### Apache 설정 예시

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /var/www/bs-academy-node/admin/dist

    <Directory /var/www/bs-academy-node/admin/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted

        # React Router를 위한 설정
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>

    # API 프록시
    ProxyPass /v1 http://localhost:6006/v1
    ProxyPassReverse /v1 http://localhost:6006/v1
</VirtualHost>
```

---

## 🎨 주요 기능

### 사용자 프론트엔드 (웹사이트)

빛솔학원의 메인 웹사이트로, 다음과 같은 페이지와 기능을 제공합니다:

- **메인 페이지**:
  - GSAP 애니메이션 효과
  - Swiper 슬라이드
  - Three.js 3D 그래픽
  - 스무스 스크롤
  - 동영상 배경
  - 스티키 섹션 효과
- **공지사항 (Notice)**: 학원 소식 및 공지사항 목록, 상세보기
- **학원 생활 (Life)**: 학원 생활 정보 목록, 상세보기
- **비전 (Vision)**: 학원의 비전과 교육 철학
- **문의 (Contact)**: 빠른 문의 폼

**주요 라이브러리:**
- GSAP (애니메이션)
- Swiper (슬라이드)
- Three.js / React Three Fiber (3D)
- React Router (라우팅)

### 백엔드 모듈

- **notice / noticedesktop**: 공지사항 관리
- **life**: 학원 생활 컨텐츠 관리
- **quickcontact**: 빠른 문의 폼 처리

### 관리자 페이지 기능

- 대시보드 및 통계
- 게시판 관리
- 학원 생활 컨텐츠 관리

---

## 🔧 문제 해결

### 포트 충돌 오류

```bash
Error: listen EADDRINUSE: address already in use :::6006
```

**해결 방법**: `config.development.js` 또는 `config.production.js`의 `appPort`를 다른 번호로 변경

### MySQL 연결 오류

```bash
Error: ER_ACCESS_DENIED_ERROR: Access denied for user
```

**해결 방법**:
1. MySQL 사용자 권한 확인
   ```sql
   GRANT ALL PRIVILEGES ON `bs-academy`.* TO 'username'@'localhost';
   FLUSH PRIVILEGES;
   ```
2. 설정 파일의 데이터베이스 정보 재확인

### CORS 오류

```
Access to XMLHttpRequest has been blocked by CORS policy
```

**해결 방법**:
1. 백엔드 `config` 파일의 `cors.origin`을 프론트엔드 도메인으로 설정
   ```javascript
   cors: {
     origin: ['http://localhost:5173', 'https://yourdomain.com'],
     credentials: true
   }
   ```

### 파일 업로드 실패

**해결 방법**:
1. `backend/app/data/files/` 폴더 권한 확인
   ```bash
   chmod -R 755 backend/app/data/files/
   ```

### 이메일 발송 실패

**해결 방법**:
1. Gmail 앱 비밀번호가 올바른지 확인
2. Gmail 계정 2단계 인증 활성화 확인
3. 방화벽에서 SMTP 포트(587) 허용

---

## 📝 추가 정보

### 개발 환경과 프로덕션 환경 구분

- **개발 모드**: `npm run dev` → `config.development.js` 사용
- **프로덕션 모드**: `npm run server` → `config.production.js` 사용

### API 버전 관리

모든 API 엔드포인트는 `/v1/` 접두사를 사용합니다:
- `/v1/members/authorize` - 로그인
- `/v1/members/list/all` - 회원 목록
- `/v1/super/orders` - 주문 관리
- 등등...

### 파일 업로드 경로

업로드된 파일은 `backend/app/data/files/` 에 저장되며, 다음 URL로 접근 가능합니다:
```
http://localhost:6006/v1/data/files/{directory}/{filename}
```

### 프로젝트 구성 요약

- **backend**: Node.js Express API 서버 (포트: 6006)
- **frontend**: React 사용자 웹사이트 (포트: 5173) - **메인 서비스**
- **admin**: React 관리자 페이지 (포트: 5174) - 내부 관리용

### 개발 시작 순서

1. 백엔드 서버 실행: `cd backend && npm run dev`
2. 데이터베이스 초기화: `http://localhost:6006/v1/init` 접속
3. 프론트엔드 실행: `cd frontend && npm run dev`
4. 브라우저에서 `http://localhost:5173` 접속하여 메인 웹사이트 확인

---

## 📞 지원

프로젝트 관련 문의사항이나 이슈가 있으면 다음으로 연락주세요:
- 이메일: gusals8855@gmail.com
- 개발사: 하군랩

---

## 📄 라이선스

이 프로젝트는 하군랩의 NodeBoard를 기반으로 개발되었습니다.
