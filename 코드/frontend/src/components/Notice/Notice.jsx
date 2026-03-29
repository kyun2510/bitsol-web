import React, { useEffect, useState } from "react";
import "./notice-page-section.css";
import api from "../../api/axios.js";
import { NavLink } from "react-router-dom";
import ListPagination from "./ListPagination/ListPagination.jsx";

export default function Notice() {
  const [fetchnotice, setFetchnotice] = useState([]);
  const [nav, setNav] = useState({
    page: 1,
    pagerow: 10,
    total_count: 0,
  });
  const fetchNewList = async () => {
    try {
      const response = await api.get(`/noticedesktop/list/all`, {
        params: {
          page: nav.page,
          pagerow: nav.pagerow,
        },
      });

      setFetchnotice(response.data.list);

      setNav({
        ...nav,
        total_count: response.data.totalCount,
      });
      // console.log(response.data)
    } catch (err) {
      console.log("공지사항 중 오류", err);
    }
  };

  useEffect(() => {
    fetchNewList();
    // console.log(fetchNewList);
  }, [nav.page]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줘야 함
    const day = date.getDate();
    // 날짜, 월, 년도를 포맷에 맞게 조정
    return `${year}. ${month}. ${day}`;
  }

  return (
    <div className="notice-page-section">
      <div className="notice-page-inner">
        <div className="notice-page-title-wrap">
          <p className="notice-page-title">공지사항</p>
        </div>

        <div className="notice-page-content-wrap">
          <div className={`notice-page-content-inner`}>
            {fetchnotice &&
              fetchnotice.map((data, idx) => {
                return (
                  <NavLink
                    to={`${data.tip_idx}`}
                    className={`notice-page-content-item`}
                    key={idx}
                  >
                    <div className="notice-page-content-imgWrap">
                      <img
                        className={`notice-page-content-img`}
                        src={data.thumb_filepath}
                        alt="product-img"
                      />
                    </div>
                    <div className={`notice-page-content-textBox`}>
                      <p className={`notice-page-content-product`}>
                        {data.tip_title}
                      </p>
                      <p className={`notice-page-content-text`}>
                        {data.tip_sub_title}
                      </p>
                      <p className={`notice-page-content-text`}>
                        {formatDate(data.reg_date)}
                      </p>
                    </div>
                  </NavLink>
                );
              })}
          </div>

          <div className="one-section-pagi">
            <ListPagination nav={nav} setNav={setNav} />
          </div>
        </div>
      </div>
    </div>
  );
}
