import React, {useEffect, useRef, useState} from 'react';
import gsap from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';
import "./two-way-section2.css";

const twoWayData = [
  {
    title: "10년 이상 경력 검증된 성공 노하우",
    desc: `개별 입시 커리큘럼`,

  },
  {
    title: "전인적 학습 코칭과 담임을 통한",
    desc: `밀착 관리`,
  },
  {
    title: "자기주도적 학습으로 성공 견인하는",
    desc: "선행 목표 시스템",
  },
  {
    title: "몰입환경을 조성하는 올인원 학습 공간",
    desc: "집중력 관리 시스템",
  },

]
export default function TwoWaySection2(props) {
  const {
    windowWidth,
  } = props;
  gsap.registerPlugin(ScrollTrigger);

  const [activeIndex, setActiveIndex] = useState(0);  // 상태로 선택된 인덱스 추적 activeTop
  const [activeTop, setActiveTop] = useState(false);
  const lettersTopRef = useRef([]);
  const lettersSubRef = useRef([]);
  const lettersRef = useRef([]);
  const [subtext, setSubText] = useState(
    "Our system"
  );
  const [text, setText] = useState(
    "당신의 꿈, 저희의 목표"
  );
  const textLines = [
    "빛솔학원은 절대 포기하지 않습니다. ",
    "최고의 학습 환경에서 꿈을 현실로",
    "만드는 여정을 함께하세요."
  ];

  const contentData = [
    {
      title: "",
      leftDetails: [
        {
          title: "",
          subtitle: "",
          technology: "",
          effects: ""
        },
        {
          title: "밀착 관리",
          subtitle: "전인적 학습 코칭과 담임을 통한",
          technology: "",
          effects: ""
        },
        {
          title: "개별 입시 커리큘럼",
          subtitle: "10년 이상 경력 검증된 성공 노하우",
          technology: "",
          effects: ""
        },
      ],
      rightDetails: [
        {
          title: "",
          subtitle: "",
          technology: "",
          effects: ""
        },
        {
          title: "선행 목표 시스템",
          subtitle: "자기주도적 학습으로 성공 견인하는",
          technology: "",
          effects: ""
        },
        {
          title: "집중력 관리 시스템",
          subtitle: "몰입환경을 조성하는 올인원 학습 공간",
          technology: "",
          effects: ""
        },
      ]
    },
  ];

  // 공통 함수
  const forBoth = () => {
    // 글자깜빡
    lettersRef.current.forEach((letter) => {
      gsap.set(letter, {yPercent: 100});
    });
    gsap.to('.two-way-sticky-title-wrap', {
      scrollTrigger: {
        trigger: '.two-way-sticky-title-wrap',
        start: "top 75%",
        end: "top 75%",
        markers: false,
        onEnter: () => {
          setActiveTop(true)
          controllOpacity(lettersSubRef);
          controllOpacity(lettersTopRef);

          setTimeout(() => {
            lettersRef.current.forEach((letter, index) => {
              const lineDelay = Math.floor(index / 100) * (0.03 * textLines[0].length); // 각 줄의 시작 딜레이 계산
              const letterDelay = 0.03 * (index % 100); // 각 글자마다의 딜레이 계산
              gsap.fromTo(letter, {yPercent: 100}, {
                yPercent: 0,
                delay: lineDelay + letterDelay, // 라인 딜레이와 글자 딜레이를 합칩니다.
                duration: 0.5,
                ease: "power4.out"
              });
            });
          }, 1000); // 전체 애니메이션을 1초 뒤에 시작

        },
        onLeaveBack: () => {
          setActiveTop(false)
        }
      }
    })

    gsap.set(".two-way-sticky-bottom", {
      bottom: '0%',
    })
    gsap.to(".two-way-sticky-bottom", {
      scrollTrigger: {
        trigger: ".two-way-container",
        start: "top top",
        end: "25% top",
        markers: false,
        scrub: true
      },
      ease: 'linear',
      bottom: '-5%',
      transform: 'translateY(0)'
    });

    gsap.to(".two-way-bottom-contents-wrap", {
      scrollTrigger: {
        trigger: ".two-way-container",
        start: "top top",
        end: "25% top",
        markers: false,
        scrub: true
      },
      ease: 'linear',
      maxWidth: '100%'
    });

    gsap.to(".two-way-cover-image", {
      scrollTrigger: {
        trigger: ".two-way-container",
        start: "top top",
        end: "25% top",
        markers: false,
        scrub: true
      },
      opacity: 1,
    });

    const TwowayVideo = document.querySelector('.two-way-cover-image')

    gsap.to(".two-way-section2", {
      scrollTrigger: {
        trigger: ".two-way-section2",
        start: "top bottom",
        end: "bottom top",
        markers: false,
        onEnter: function () {
          TwowayVideo.play()
        },
        onEnterBack: function () {
          TwowayVideo.play()
        },
        onLeave: function () {
          TwowayVideo.pause()
        },
        onLeaveBack: function () {
          TwowayVideo.pause()
        }
      }
    });


  }

  const handleContChange = (index) => {
    gsap.to(".two-way-bottom-contents-wrap", {
      maxWidth: '332px',
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(".two-way-cover-image", {
          opacity: 1,
          onComplete: () => {
            setActiveIndex(index);
            gsap.to(".two-way-bottom-contents-wrap", {
              maxWidth: '100%',
              delay: 0.5,
              duration: 0.5,
              ease: "power2.out",
            });
            gsap.to(".two-way-cover-image", {
              opacity: 0,
              delay: 0.5,
              duration: 0.5
            });
          }
        })
      }
    });

  }

  const controllOpacity = (elem) => {
    gsap.set(elem.current, {opacity: 0});

    let timeline = gsap.timeline();

    timeline.to(elem.current, {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      stagger: {
        from: "random",
        each: 0.02
      }
    });

    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * elem.current.length);
      let randomSpan = elem.current[randomIndex];
      timeline.fromTo(randomSpan, {opacity: 0}, {
        opacity: Math.random(),
        duration: 0.1,
        repeat: 2,
        yoyo: true,
        ease: "power2.inOut"
      }, "<");
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    forBoth()
  }, []);

  return (
    <>
      <section className={`two-way-section2 pc-only`}>
        <div className={`two-way-container`}>
          <div className={`two-way-sticky`}>
            <div className={`two-way-sticky-inner`}>
              <div className={`two-way-sticky-top`}>
                <div className={`two-way-sticky-title-wrap ${activeTop ? 'active' : ''}`}>
                  <p className="ten-top-text top">
                    {Array.from(subtext).map((letter, index) => (
                      <span key={index} ref={el => lettersTopRef.current[index] = el} className="project-portfolio-list-subject">
                        {letter !== ' ' ? letter : '\u00A0'}
                      </span>
                    ))}
                  </p>
                  <p className="ten-top-text big">
                    {Array.from(text).map((letter, index) => (
                      <span key={index} ref={el => lettersSubRef.current[index] = el} className="project-portfolio-list-subject">
                        {letter !== ' ' ? letter : '\u00A0'}
                      </span>
                    ))}
                  </p>
                </div>

                {textLines.map((line, index) => (
                  <p key={index} className="ten-top-text sub">
                    {Array.from(line).map((letter, letterIndex) => {
                      // 조건에 따라 클래스명 결정
                      const isActive = index === 2 && (letterIndex >= 0 && letterIndex <= 11);
                      const className = `project-portfolio-list-subject ${isActive ? 'active' : ''}`;

                      return (
                        <span
                          key={index * 100 + letterIndex}
                          ref={el => lettersRef.current[index * 100 + letterIndex] = el}
                          className={className}
                        >
                          {letter !== ' ' ? letter : '\u00A0'}
                        </span>
                      );
                    })}
                  </p>
                ))}
              </div>
              <div className={`two-way-sticky-bottom`}>
                <div className={`two-way-sticky-bottom-inner`}>
                  <div className={`two-way-bottom-cover-wrap`}>
                    <video className={`two-way-cover-image`} src={'/images/two-way-section/2.mp4'} autoPlay muted loop playsInline>
                    </video>
                  </div>

                  <div className={`two-way-bottom-contents-wrap`}>
                    <div className={`two-way-bottom-contents-left`}>
                      {contentData[activeIndex].leftDetails.map((detail, index) => (
                        <div key={index} className={`two-way-bottom-contents left${index + 1}`}>
                          <div className={`two-way-bottom-contents-line`}>
                            <div className={'two-way-bottom-contents-lefttitwrap'}>
                              <div className={`two-way-bottom-contents-lefttit`}>
                                <p className={`two-way-bottom-contents-leftsubtit`}>
                                  {detail.subtitle}
                                </p>
                                {detail.title}

                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={`two-way-bottom-contents-right`}>
                      {contentData[activeIndex].rightDetails.map((detail, index) => (
                        <div key={index} className={`two-way-bottom-contents right${index + 1}`}>
                          <div className={`two-way-bottom-contents-line`}>
                            <div className={`two-way-bottom-contents-lefttitwrap ${index === 0 ? 'one' : ''}`}>
                              <div className={`two-way-bottom-contents-lefttit`}>
                                <p className={`two-way-bottom-contents-leftsubtit`}>
                                  {detail.subtitle}
                                </p>
                                {detail.title}

                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`two-way-section2 mobile-only`}>
        <div className="hoo-sticky-wrapper">
          <div className="hoo-sticky-text-wrap">
            <p className="hoo-mini-text">
              {Array.from(subtext).map((letter, index) => (
                <span key={index} ref={el => lettersTopRef.current[index] = el}
                      className="project-portfolio-list-subject">
                    {letter !== ' ' ? letter : '\u00A0'}
                </span>
              ))}</p>
            <p className="hoo-big-text">{text}</p>

            {textLines.map((line, index) => (
              <p key={index} className="ten-top-text sub">
                {Array.from(line).map((letter, letterIndex) => {
                  // 조건에 따라 클래스명 결정
                  const isActive = index === 2 && (letterIndex >= 0 && letterIndex <= 11);
                  const className = `project-portfolio-list-subject ${isActive ? 'active' : ''}`;

                  return (
                    <span
                      key={index * 100 + letterIndex}
                      ref={el => lettersRef.current[index * 100 + letterIndex] = el}
                      className={className}
                    >
                      {letter !== ' ' ? letter : '\u00A0'}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>
          <div className="hoo-three-cards-wrap">
            <div className="hoo-card-sticky-wrap">
              {twoWayData && twoWayData.map((unit, idx) => (
                <div className="hoo-card-units" key={idx}>
                  <div className="hoo-card-relati-div">
                    <div className="hoo-card-line pc-only">
                      <div className="hoo-left-line"></div>
                    </div>

                    <div className="hoo-card-text-wrap">
                      <p className={`hoo-big-card-text`} dangerouslySetInnerHTML={{__html: unit.title}}>
                      </p>
                      <p className="hoo-small-card-text" dangerouslySetInnerHTML={{__html: unit.desc}}>
                      </p>
                      <a className="hoo-arrow-a-tag" href="#"></a>
                    </div>
                    <p className="hoo-big-card-text"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
