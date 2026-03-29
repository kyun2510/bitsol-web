import React, {useEffect, useState} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
import "./life-detail-section.css"
import {useNavigate, useParams} from "react-router-dom";
import api from "../../../api/axios.js";

gsap.registerPlugin(ScrollTrigger);

export default function LifeDetailPage() {

  const navigate = useNavigate();
  const {id} = useParams();
  const [proData, setProData] = useState([]);

  useEffect(() => {
    getProduct()
  }, []);

  const getProduct = async () => {
    try {
      const response = await api.get(`notice/post/${id}`);

      setProData(response.data);
    } catch (error) {
      console.error('공지사항 조회 중 오류 발생:', error);
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줘야 함
    const day = date.getDate();
    // 날짜, 월, 년도를 포맷에 맞게 조정
    return `${year}. ${month}. ${day}`;
  }

  return (
    <div className="category-detail-section">
      <div className="category-detail-inner">
        <div className="category-page-right-wrap">
          <div className="category-detail-top">
            <p className="category-detail-product">{proData.not_title}</p>
            <p className="category-detail-category">{formatDate(proData.not_datetime)}</p>
          </div>
          <div className="category-detail-content">
            <div className="category-detail-content-text-wrap">
              <div
                className="category-detail-content-container"
                dangerouslySetInnerHTML={{__html: proData.not_content}}
              >
              </div>
            </div>
            <div className="category-detail-btn-wrap">
              <div onClick={() => navigate(-1)} className="category-detail-content-btn">목록으로</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
