import React from "react";
import {Route, Routes} from "react-router-dom";
import Vision from "../components/Vision/Vision.jsx";

function VisionRouter(props) {
  const {
    windowWidth
  } = props

  return (
    <Routes>
      <Route index element={<Vision windowWidth={windowWidth}/>}></Route>
    </Routes>
  );
}

export default VisionRouter;
