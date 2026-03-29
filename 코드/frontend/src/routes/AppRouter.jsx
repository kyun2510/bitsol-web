import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import MainContainer from "../components/Main/MainContainer.jsx";
import About from "../components/About/About.jsx";
import Recruitment from "../components/Recruitment/Recruitment.jsx";
import NoticeRouter from "./NoticeRouter.jsx";
import VisionRouter from "./VisionRouter.jsx";
import LifeRouter from "./LifeRouter.jsx";
import ContactRouter from "./ContactRouter.jsx";

function AppRouter() {
  // 디바이스 width 감지 - PC 모바일 감지용
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);

  // 화면 반응형 대응 용
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // 모바일 vh 문제 용
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route index element={<MainContainer windowWidth={windowWidth} />} />
          <Route path={'about'} element={<About />} />
          <Route path={'recruitment'} element={<Recruitment />} />
          <Route path={'notice/*'} element={<NoticeRouter />} />
          <Route path={'vision/*'} element={<VisionRouter windowWidth={windowWidth} />} />
          <Route path={'life/*'} element={<LifeRouter />} />
          <Route path={'contact/*'} element={<ContactRouter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;