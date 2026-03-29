import React, {useEffect, useState} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
import "./life-page-section.css"
import api from "../../api/axios";
import {NavLink} from "react-router-dom";
import ListPagination from "./ListPagination/ListPagination.jsx";
import StrengthsBanner from "../StrengthsBanner/StrengthsBanner.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function LifeListPage() {
  const [categoryList, setcategoryList] = useState([])
  const [prdData, setprdData] = useState([])
  const [search, setsearch] = useState('all')
  const [nav, setNav] = useState({
    page: 1,
    pagerow: 10,
    total_count: 0
  });

  useEffect(() => {
    getPrdData();
  }, []);

  useEffect(() => {
    getPrdData();
  }, [nav.page]);

  async function getPrdData() {
    try {
      const {data} = await api.get('/notice/list', {
        params: {
          page: nav.page,
          pagerow: nav.pagerow,
        }
      });

      setprdData(data.posts);
      setNav(prevNav => ({
        ...prevNav,
        total_count: data.totalCount || 0
      }));
    } catch (e) {
      console.error(e);
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줘야 함
    const day = date.getDate();
    // 날짜, 월, 년도를 포맷에 맞게 조정
    return `${year}. ${month}. ${day}`;
  }

  return (
    <>
      <div className="category-page-section">
        <div className="category-page-inner">
          <div className="category-page-title-wrap">
            <p className="category-page-title">학원생활</p>
          </div>
          <div className="category-page-content-wrap">
            <div className={`category-page-content-inner`}>
              {prdData && prdData.map((prd, idx) => (
                <NavLink to={`/life/${prd.not_id}`} className={`category-page-content-item`} key={idx}>
                  <div className="category-page-content-imgWrap">
                    <img className={`category-page-content-img`} src={prd.thumb_filepath} alt="product-img"/>
                  </div>
                  <div className={`category-page-content-textBox`}>
                    <p className={`category-page-content-title`}>{prd.not_title}</p>
                    <p className={`category-page-content-product`}>{prd.not_subtitle}</p>
                    <p className={`category-page-content-text`}>{formatDate(prd.not_datetime)}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="one-section-pagi">
          <ListPagination nav={nav} setNav={setNav}/>
        </div>
      </div>
      <StrengthsBanner/>
    </>
  );
}
