import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../../../api/axios.js";
import "./news-detail-section.css";

export default function NewsDetailPage() {

  const { noticeId } = useParams();
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState(null); // 데이터가 객체이므로 초기값을 null로 설정

  useEffect(() => {
    getNotice();
  }, [noticeId]); // noticeId가 변경될 때마다 getNotice 호출

  const getNotice = async () => {
    try {
      const response = await api.get(`noticedesktop/${noticeId}`);
      setNewsData(response.data);
    } catch (error) {
      console.error("공지사항 조회 중 오류 발생:", error);
    }
  };

  if (!newsData) {
    return <div>Loading...</div>; // 데이터를 로드 중일 때 로딩 표시
  }

  const date = new Date(newsData.current.reg_date);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

  return (
    <div className={`news-detail-section`}>
      <div className="news-detail-inner">
        <div className="news-detail-top">
          <div className="news-detail-title">{newsData.current.tip_title}</div>
          <div className="news-detail-date">
            <p>
              작성일 : <span>{formattedDate}</span>
            </p>
          </div>
        </div>
        <div className="news-detail-bottom">
          <div
            className="news-detail-content"
            dangerouslySetInnerHTML={{ __html: newsData.current.tip_content }}
          ></div>
        </div>
        <div
          onClick={() => navigate(-1)}
          className="category-detail-content-btn"
        >
          목록으로
        </div>
      </div>
    </div>
  );
}
