import React from "react";
import { Route, Routes } from "react-router-dom";
import Notice from "../components/Notice/Notice.jsx";
import NewsDetailPage from "../components/Notice/detail/NewsDetailPage.jsx";

function NoticeRouter(props) {
  const { windowWidth } = props;

  return (
    <Routes>
      <Route index element={<Notice windowWidth={windowWidth} />} />
      <Route path=":noticeId" element={<NewsDetailPage />} />
    </Routes>
  );
}

export default NoticeRouter;
