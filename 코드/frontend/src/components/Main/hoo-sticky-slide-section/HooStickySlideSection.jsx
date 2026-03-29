import {useEffect} from 'react'
import "./hoo-sticky-slide-section.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/scrollTrigger';

const unitData = [
  {
    title: "전형별 특성 분석",
    desc: `학과와 학교에 따라 전형에 차이를 철저히 분석하여<br /> 최적의 방향을 설정합니다.`,
    img: "/images/hoo-sticky-slide-section/1.mp4",
  },
  {
    title: "지원군에 따른 전략",
    desc: `가 나 다군의 적절한 레벨설정이 합격의 승패를 나누는 경우가 <br /> 많습니다. 수시 결과와 데이터를 통해 전략적으로 설정 합니다`,
    img: "/images/hoo-sticky-slide-section/2.mp4",
  },
  {
    title: "빅데이터를 통한 분석",
    desc: "검증된 고가의 빅데이터를 활용하여 전략적으로 선정 합니다.",
    img: "/images/hoo-sticky-slide-section/3.mp4",
  },
]

const HooStickySlideSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) {

    } else {
      const createAnimations = (index, offset) => {
        gsap.to(`.hoo-sticky-slide-section .hoo-card-units:nth-of-type(${index})`, {
          scrollTrigger: {
            trigger: ".hoo-sticky-slide-section",
            markers: false,
            start: `${-300 + offset}px center`,
            end: `${400 + offset}px center`,
            scrub: true,
          },
          right: `${100 - (index - 1) * 90}px`
        });
        gsap.to(`.hoo-sticky-slide-section .hoo-card-units:nth-of-type(${index}) .hoo-big-card-text`, {
          scrollTrigger: {
            trigger: ".hoo-sticky-slide-section",
            markers: false,
            start: `${600 + offset}px center`,
            end: `${900 + offset}px center`,
            scrub: true,
          },
          opacity: '0.5',
          x: "-15rem",
          y: "180px",
          rotate: "-90deg",
          scale: 0.4,
        });
        gsap.to(`.hoo-sticky-slide-section .hoo-card-units:nth-of-type(${index}) .hoo-left-line`, {
          scrollTrigger: {
            trigger: ".hoo-sticky-slide-section",
            markers: false,
            start: `${900 + offset}px center`,
            end: `${1000 + offset}px center`,
            scrub: true,
          },
          clipPath: "inset(0% 0 0 0)"
        });
      };

      const interval = 700; // 간격을 700px로 설정
      createAnimations(1, 0);
      createAnimations(2, interval);
      createAnimations(3, interval * 2);
    }
  }, []);

  return (
    <section className="hoo-sticky-slide-section">
      <div className="hoo-sticky-wrapper">
        <div className="hoo-sticky-text-wrap">
          <p className="hoo-mini-text">빛솔학원 밀착 관리 시스템</p>
          <p className="hoo-big-text">철저한 시스템으로 학생들의 <br/>능률을 올립니다.</p>
        </div>
        <div className="hoo-three-cards-wrap">
          <div className="hoo-card-sticky-wrap">
            {unitData && unitData.map((unit, idx) => (
              <div className="hoo-card-units" key={idx}>
                <div className="hoo-card-relati-div">
                  <div className="hoo-card-line pc-only">
                    <div className="hoo-left-line"></div>
                  </div>
                  <div className="hoo-card-text-wrap">
                    {isMobile ? null :
                      <p className={`hoo-big-card-text ${idx === 2 ? 'third-card' : ''}`}
                         dangerouslySetInnerHTML={{__html: unit.title}}>
                      </p>
                    }
                    <p className="hoo-small-card-text" dangerouslySetInnerHTML={{__html: unit.desc}}>
                    </p>
                    <a className="hoo-arrow-a-tag" href="/vision">
                      <div className="hoo-card-arrow-btn">
                        <div className="hoo-learn-hidden">
                          <p className="hoo-learn-more">Learn More</p>
                          <p className="hoo-learn-more">Learn More</p>
                        </div>
                        <div className="hoo-arrow-hidden">
                          <span className="hoo-learn-more-arrow material-symbols-outlined">
                            trending_flat
                          </span>
                          <span className="hoo-learn-more-arrow material-symbols-outlined">
                            trending_flat
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="hoo-right-video-wrap">
                    <video className="hoo-right-video" src={`/images/hoo-sticky-slide-section/${idx + 1}.mp4`} loop muted playsInline autoPlay></video>
                  </div>
                  {isMobile ?
                    <p className="hoo-big-card-text" dangerouslySetInnerHTML={{__html: unit.title}}></p>
                    :
                    null
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}

export default HooStickySlideSection