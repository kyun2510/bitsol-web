// HealthRouter.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import BoardFaq from "../components/Board/BoardFaq/BoardFaq.jsx";
import BoardInquiry from "../components/Board/BoardInquiry/BoardInquiry.jsx";
import PCNoticeList from "../components/notice/PCNoticeList.jsx";
import PCNoticeEdit from "../components/notice/PCNoticeEdit.jsx";
import LifeList from "../components/Life/LifeList.jsx";
import LifeEdit from "../components/Life/LifeEdit.jsx";


function TipRouter() {
  return (
    <Routes>
     <Route path="life" element={<LifeList />} />
     <Route path="life/:not_id" element={<LifeEdit />} />
      <Route path='notice' element={<PCNoticeList />}></Route>
      <Route path={'notice/:not_id'} element={<PCNoticeEdit />}></Route>
      <Route path="faq" element={<BoardFaq />}></Route>
      <Route path="inquiry" element={<BoardInquiry />}></Route>
    </Routes>
  );
}

export default TipRouter;
