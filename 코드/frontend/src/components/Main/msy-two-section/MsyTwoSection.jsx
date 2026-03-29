import React, {useEffect, useRef} from "react";
import "./hoo-skew-text-section.css";
import gsap from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

const MsyTwoSection = ({currentSection}) => {

  gsap.registerPlugin(ScrollTrigger);
  const backRef = useRef([]);
  // ref를 자식요소로 추가
  const addToRefs = (el) => {
    if (el && !backRef.current.includes(el)) {
      backRef.current.push(el);
    }
  };

  useEffect(() => {
    const starts = [100, 160, 220, 280];  // 각 요소의 시작점
    if (backRef.current.length > 0) {
      backRef.current.forEach((target, index) => {
        gsap.to(target, {
          scrollTrigger: {
            trigger: ".hoo-skew-text-section",
            markers: false,
            start: `${starts[index]}px center`,
            end: `${starts[index]}px center`,
            onEnter: () => {
              target.classList.add("active");
            },
            onEnterBack: () => {
              target.classList.remove("active");
            },
            scrub: true
          }
        });

        backRef.current.forEach(text => {
          // 각 요소의 텍스트를 가져옴
          let chars = text.textContent.split('');
          // 기존 텍스트를 지우고 각 글자를 <span>으로 감싸서 다시 추가
          text.innerHTML = chars.map(char => `<span>${char}</span>`).join('');

          // 이제 각 span에 대한 애니메이션 지연 시간을 설정
          const spans = text.querySelectorAll('span');
          spans.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.02}s`;
          });
        });
      });
    }
  }, []);

  return (
    <section className="hoo-skew-text-section">
      <div className="hoo-main-wrapper">
        <div className="hoo-top-skew-text-wrap">
          <p className="skew-context" ref={addToRefs}>빛솔 학원은 지난 16년</p>
          <p className="skew-context" ref={addToRefs}>축적된 노하우와 방대한 데이터를 가지고</p>
          <p className="skew-context" ref={addToRefs}>학생들이 공부 할 수 밖에 없는 환경과 시스템을 만들었습니다.</p>
        </div>
        <div className="hoo-bottom-img-units">
          <div className="hoo-img-units">
            <div className="hoo-text-wrap">
              <p>담임 상담</p>
            </div>
            <div className="hoo-img-wrap">
              <img src={'/images/hoo-skew-text-section/1.png'} alt={`담임 상담`}/>
            </div>
          </div>
          <div className="hoo-img-units">
            <div className="hoo-text-wrap">
              <p>제휴 업체</p>
            </div>
            <div className="hoo-img-wrap">
              <img src={'/images/hoo-skew-text-section/4.png'} alt={`제휴 업체`}/>
            </div>
          </div>
          <div className="hoo-img-units">
            <div className="hoo-text-wrap">
              <p>학습실</p>
            </div>
            <div className="hoo-img-wrap">
              <img src={'/images/hoo-skew-text-section/3.png'} alt={`학습실`}/>
            </div>
          </div>
          <div className="hoo-img-units">
            <div className="hoo-text-wrap">
              <p>휴게실</p>
            </div>
            <div className="hoo-img-wrap">
              <img src={'/images/hoo-skew-text-section/2.png'} alt={`휴게실`}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MsyTwoSection;
