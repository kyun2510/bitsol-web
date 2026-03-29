import React, {useEffect} from 'react'
import {Outlet} from "react-router-dom";
import './assets/css/reset.css';
import {smoothScroll} from "./components/SmoothScroll/SmoothScroll.js";
import TyUHeader from './components/TyUHeader/TyUHeader.jsx';
import BotemFooterSection from './components/botem-footer-section/BotemFooter.jsx';

function App() {
  // 스무스 스크롤
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <>
    <TyUHeader />
      <main id={'main'}>
        <Outlet/>
      </main>
      <BotemFooterSection />
    </>
  )
}

export default App
