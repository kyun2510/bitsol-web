import React from 'react'
import "./hoo-wave-text-section.css";

const HooWaveTextSection = () => {
  return (
    <section className="hoo-wave-text-section">
      <div className="hoo-front-text-wrap">
        <p className="hoo-mini-text">빛솔 학원은 꿈이 있습니다.</p>
        <p className="hoo-big-text">단순히 좋은 대학에 입학하는 것을</p>
        <p className="hoo-big-text">넘어서서 학생의 습관과 태도와 자기목표를 만들어 줍니다.</p>
      </div>
      <div className="hoo-wave-bg-wrap">
        <img src="/images/hoo-wave-text-section/wave.jpg" alt={`빛솔학원`}/>
      </div>
    </section>
  )
}

export default HooWaveTextSection