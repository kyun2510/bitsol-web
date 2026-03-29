import "./academy-vision-section.css"
import KdMainSection6 from "./KdMainSection6/KdMainSection6.jsx";
import TwoWaySection2 from "./TwoWaySection/TwoWaySection2.jsx";
import ProjectPortfolioSection3 from "./ProjectPortfolioSection3/ProjectPortfolioSection3.jsx";
import InterviewBoxSection from "./InterviewBoxSection/InterviewBoxSection.jsx";
import StrengthsBanner from "../StrengthsBanner/StrengthsBanner.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Vision(props) {
  const {
    windowWidth
  } = props

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }
  }, [location]);

  return (
    <>
      <KdMainSection6/>
      <TwoWaySection2/>
      <ProjectPortfolioSection3 windowWidth={windowWidth}/>
      <InterviewBoxSection/>
      <StrengthsBanner/>
    </>

  )
}