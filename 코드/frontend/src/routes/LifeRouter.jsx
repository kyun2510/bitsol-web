import React from "react";
import {Route, Routes} from "react-router-dom";
import LifeListPage from "../components/Life/LifeListPage.jsx";
import LifeDetailPage from "../components/Life/detail/LifeDetailPage.jsx";

function LifeRouter(props) {
  const {
    windowWidth
  } = props

  return (
    <Routes>
      <Route index element={<LifeListPage windowWidth={windowWidth}/>}></Route>
      <Route path='/:id' element={<LifeDetailPage windowWidth={windowWidth}/>}></Route>
    </Routes>
  );
}

export default LifeRouter;
