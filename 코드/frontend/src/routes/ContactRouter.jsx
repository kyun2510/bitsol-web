import React from "react";
import {Route, Routes} from "react-router-dom";
import ThirdContactSection from "../components/Contact/third-contact-section/ThirdContactSection.jsx";

function ContactRouter(props) {
  const {
    windowWidth
  } = props

  return (
    <Routes>
      <Route index element={<ThirdContactSection windowWidth={windowWidth}/>}></Route>
    </Routes>
  );
}

export default ContactRouter;
