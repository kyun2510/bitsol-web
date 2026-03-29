// api.js
import axios from "axios";

// export const baseURL = "/v1";
export const baseURL = 'http://localhost:6006/v1'

const api = axios.create({
  baseURL: baseURL,
});
let refreshTokenRetryCount = 0;
// 토큰을 헤더에 추가하는 로직 (선택적)
// 요청 인터셉터
api.interceptors.request.use(
  config => {
    // 세션 스토리지에서 액세스 토큰 가져오기
    const token = sessionStorage.getItem("at");
    if (token) {
      // 요청 헤더에 액세스 토큰 추가
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 응답 인터셉터
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 이 플래그는 요청이 이미 재시도되었음을 나타냅니다.
      return refreshTokenAndReattemptRequest(originalRequest);
    }
    return Promise.reject(error);
  }
);

async function refreshTokenAndReattemptRequest(originalRequest) {
  try {
    const refreshToken = sessionStorage.getItem("rt"); // 리프레시 토큰 가져오기
    // 리프레시 토큰으로 새 액세스 토큰 요청
    const { data } = await axios.post(baseURL+"/members/authorize/token", { refreshToken });

    sessionStorage.setItem("at", data.accessToken); // 새 액세스 토큰 저장

    // 원래 요청에 새 액세스 토큰 설정
    api.defaults.headers["Authorization"] = `Bearer ${data.accessToken}`;
    originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;

    return api(originalRequest); // 원래 요청 재시도
  } catch (error) {
    console.error("Unable to refresh token.", error);

    sessionStorage.removeItem('rt')
    sessionStorage.removeItem('at')
    sessionStorage.removeItem('ud')
    api.defaults.headers['Authorization'] = null;
    window.location.href = '/members/login';
    return Promise.reject(error);
  }
}


export default api;
