import React from "react";
import HooMainTopSection from "./hoo-main-top-section/HooMainTopSection.jsx";
import MsyTwoSection from "./msy-two-section/MsyTwoSection.jsx";
import HooContactUsSection from "./hoo-contact-us-section/HooContactUsSection.jsx";
import HooWaveTextSection from "./hoo-wave-text-section/HooWaveTextSection.jsx";
import HooStickySlideSection from "./hoo-sticky-slide-section/HooStickySlideSection.jsx";
import MsyClickSwiperSection from "./msyClick-swiper-section/MsyClickSwiperSection.jsx";
import ChitStickBgSection from "./chit-stickybg-section/ChitStickBgSection.jsx";
import HooContactUsSectionTwo from "./hoo-contact-us-section-two/HooContactUsSectionTwo.jsx"
import MsyHoriSection from "./msy-hori-section/MsyHoriSection.jsx";
import TyBackSection from "./ty-back-section/TyBackSection.jsx";

export default function MainContainer({windowWidth}) {
  return (
    <>
      <TyBackSection/>
      <HooMainTopSection/>
      <MsyHoriSection/>
      <HooContactUsSection/>
      <MsyTwoSection/>
      <HooWaveTextSection/>
      <HooStickySlideSection/>
      <MsyClickSwiperSection/>
      <ChitStickBgSection windowWidth={windowWidth}/>
      <HooContactUsSectionTwo/>
    </>
  )
}