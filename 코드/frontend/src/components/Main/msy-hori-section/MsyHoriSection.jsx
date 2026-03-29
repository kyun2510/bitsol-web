import React, {useEffect, useRef} from "react";
import "./hoo-company-hori-section.css";

const MsyHoriSection = ({currentSection}) => {

  const backRef = useRef(null);
  let animationFrameId = null; // 애니메이션 프레임 ID를 저장할 변수
  useEffect(() => {
    // 이전 애니메이션 프레임 ID를 초기화
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    const wrapper = document.querySelector('.hori-hidden-main-wrapper');
    const original = document.querySelector('.hori-go-to-left');
    // 원본 요소를 복사
    const clone1 = original.cloneNode(true);
    const clone2 = original.cloneNode(true);
    // 복사본을 원래 위치에 삽입
    wrapper.appendChild(clone1);
    wrapper.appendChild(clone2);
    // 애니메이션 실행
    startAnimation([original, clone1, clone2]);
    // requestAnimationFrame을 사용하여 애니메이션 반복
    function startAnimation(elements) {
      let offset = 0;
      function animate() {
        if (offset <= -200) {
          offset = 0;
        }
        elements.forEach(el => {
          el.style.transform = `translateX(${offset}%)`;
        });
        offset -= 10;
        animationFrameId = requestAnimationFrame(animate); // 다음 프레임을 요청
      }
      animate(); // 애니메이션 시작
    }
    // 컴포넌트가 unmount될 때 애니메이션 정리
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hoo-company-hori-section">
      <div className="hoo-hori-wrapper">
        <div className="hoo-main-small-text"><p>빛솔학원 합격한 대학교</p></div>
        <div className="hoo-com-hidden-box">
          <div className="hori-hidden-main-wrapper">
            <div className="hori-go-to-left">
              <div className="hori-left-units">
                <img src={'/images/hoo-company-hori-section/1.png'} alt={`빛솔학원`}/>
              </div>
              <div className="hori-left-units">
                <img src={'/images/hoo-company-hori-section/2.png'} alt={`빛솔학원`}/>
              </div>
              <div className="hori-left-units">
                <img src={'/images/hoo-company-hori-section/3.png'} alt={`빛솔학원`}/>
              </div>
              <div className="hori-left-units four">
                <img src={'/images/hoo-company-hori-section/4.png'} alt={`빛솔학원`}/>
              </div>
              <div className="hori-left-units">
                <img src={'/images/hoo-company-hori-section/5.png'} alt={`빛솔학원`}/>
              </div>
              <div className="hori-left-units">
                <img src={'/images/hoo-company-hori-section/6.png'} alt={`빛솔학원`}/>
              </div>
              <div className="hori-left-units">
                <img src={'/images/hoo-company-hori-section/7.png'} alt={`빛솔학원`}/>
              </div>
            </div>
          </div>
          <div className="hoo-com--hori-line"></div>
        </div>
      </div>
    </section>
  );
};

export default MsyHoriSection;
