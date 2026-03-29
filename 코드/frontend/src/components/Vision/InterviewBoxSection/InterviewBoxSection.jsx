import React, {useEffect, useRef, useState} from 'react';
import "./interview-box-section.css";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function InterviewBoxSection(props) {
  const {
    requestList,
    setRequestList,
    activeRequest,
    windowWidth
  } = props;

  const lettersRef = useRef([]);
  const [activeTop, setActiveTop] = useState(false)
  const [boxList, setBoxList] = useState([
    {
      active: false,
      title: '고등학교 2학년 맞춤 수업과 집중\n연습으로 대학 입시 성공',
      text: '',
      videoName: 'vid.mp4',
      buttonText: '무료로 메인 받기',
      typingTitle: '',
      typingText: ''
    },
    {
      active: false,
      title: '고등학교 3학년 마지막까지\n함께 달려나가는 학업 동반자',
      text: '',
      videoName: 'vid.mp4',
      buttonText: '견적서 받기',
      typingTitle: '',
      typingText: ''
    },
    {
      active: false,
      title: '재수생반 새로운 시작, \n끊임없는 도전으로 목표 달성을 향해',
      text: '',
      videoName: 'vid.mp4',
      buttonText: '최신기술 확인',
      typingTitle: '',
      typingText: ''
    },
    {
      active: false,
      title: 'N수생반  끊임없는\n노력과 열정으로 성취하는 길',
      text: '',
      videoName: 'vid.mp4',
      buttonText: '기획서 받기',
      typingTitle: '',
      typingText: ''
    }
  ])
  const textLines = [
    "빛솔학원은 함께할 신입생을 모집합니다.",
    "빛솔학원만의 시스템과 최상의 학습 환경을 통해",
    "여러분의 목표 달성을 지원합니다."
  ];

  // 텍스트 타이핑
  const titleTyping = async (index, title, text) => {
    let currentText = '';
    for (let i = 0; i < title.length; i++) {
      currentText += title[i];
      setBoxList(prevState => {
        const newState = prevState.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              typingTitle: currentText
            };
          } else {
            return {
              ...item
            };
          }
        });
        return newState;
      });
      await new Promise(resolve => setTimeout(resolve, 10));
      if (i == title.length - 1) {
        textTyping(index, text)
      }
    }
  }
  const textTyping = async (index, text) => {
    let currentText = '';
    for (let i = 0; i < text.length; i++) {
      currentText += text[i];
      setBoxList(prevState => {
        const newState = prevState.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              typingText: currentText
            };
          } else {
            return {
              ...item
            };
          }
        });
        return newState;
      });
      await new Promise(resolve => setTimeout(resolve, 10));
      if (i == text.length - 1) {

      }
    }
  }

  // 공통 함수
  const forBoth = () => {

    gsap.to('.interview-box-top', {
      scrollTrigger: {
        trigger: '.interview-box-top',
        start: "top 75%",
        end: "top 75%",
        markers: false,
        onEnter: () => {
          setActiveTop(true)
          setTimeout(() => {
            lettersRef.current.forEach((letter, index) => {
              const lineDelay = Math.floor(index / 100) * (0.03 * textLines[0].length);
              const letterDelay = 0.03 * (index % 100);
              gsap.fromTo(letter, {yPercent: 0}, {
                y: 0,
                delay: lineDelay + letterDelay,
                duration: 0.5,
                ease: "power4.out"
              });
            });
          }, 300);
        },
        onLeaveBack: () => {
          setActiveTop(false)

        }
      }
    })
    gsap.to('.interview-seperated-box-wrap', {
      scrollTrigger: {
        trigger: '.interview-box-section',
        start: windowWidth > 768 ? "1% top" : "5% top",
        end: "7% top",
        scrub: true,
        duration: 0,
        markers: false
      },
      opacity: 1
    })
    gsap.to('.interview-seperated-box-wrap', {
      scrollTrigger: {
        trigger: '.interview-box-section',
        start: "7% top",
        end: "7% top",
        scrub: true,
        duration: 0,
        markers: false,
        onEnter: () => {
          setBoxList(prevState => {
            const newState = prevState.map((item, i) => {
              return {
                ...item,
                active: true
              };
            });
            return newState;
          });
        },
        onLeaveBack: () => {
          setBoxList(prevState => {
            const newState = prevState.map((item, i) => {
              return {
                ...item,
                active: false,
                typingTitle: '',
                typingText: ''
              };
            });
            return newState;
          });
        }
      }
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    forBoth()
  }, []);

  return (
    <section className={`interview-box-section`}>
      <div className={`interview-box-container`}>
        <div className={`interview-box-sticky-wrap`}>
          <div className={`interview-box-sticky`}>
            <div className={`interview-box-sticky-inner`}>
              <div className={`interview-box-top ${activeTop ? 'active' : ''}`}>
                <h4 className={`interview-box-title`} id="recruitment">
                  빛솔학원 모집 중
                </h4>
                {textLines.map((line, index) => (
                  <div
                    className={`interview-box-sub-title-wrap`}
                    key={index}
                  >
                    {Array.from(line).map((letter, i) => (
                      <p
                        key={i}
                        className={`interview-box-sub-title`}
                        ref={el => lettersRef.current[index * 100 + i] = el}
                      >
                        {letter !== ' ' ? letter : '\u00A0'}
                      </p>
                    ))}
                  </div>
                ))}

              </div>
              <div className={`interview-seperated-box-wrap`}>
                {boxList && boxList.map((list, index) => (
                  <div
                    className={`interview-seperated-box interview-seperated-box${index + 1} ${list.active ? 'active' : ''}`}
                    key={index}>
                    <div className={`interview-seperated-surface`}>
                      <div className={`interview-seperated-top`}>
                        <p className={`interview-seperated-front-title`}>
                          {list.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
