import React, {useLayoutEffect, useEffect, useRef, useState} from "react";
import "./kd-main-section6.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

export default function KdMainSection6(props) {
  const {windowWidth} = props;

  const [activeGradient, setActiveGradient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [totalNumber, setTotalNumber] = useState(5);

  const lettersTopRef = useRef([]);
  const lettersSubRef = useRef([]);
  const lettersRef = useRef([]);
  const [subtext, setSubText] = useState("Our Goals");
  const [text, setText] = useState("빛솔 학원, 당신과 함께 꿈을 키워나갑니다.");
  const textLinesPc = ["포기하지 않고 끝까지 해내어 학생이", "자기 삶에 깊은 만족과 소망을 가지고 살아가게 만듭니다."];

  const textLinesMobile = ["포기하지 않고 끝까지 해내어", "학생이 자기 삶에 깊은 만족과", "소망을 가지고 살아가게 만듭니다."];

  const [textLines, setTextLines] = useState(window.innerWidth <= 768 ? textLinesMobile : textLinesPc);

  const [kdRightList, setKdRightList] = useState([
    {
      active: false,
      name: "주의력 분산 완벽 차단",
      info: "교과목 수업, 개인 공부, 질문과 피드백, 학습 코칭, 식사, 낮잠(20분 통제), 휴식, 교재 구입등등 불필요한 시간 이나 주의력 소모를 극단적으로 최소화 시켜 한 장소안에서 학생의 공부 환경을 구축하고 모든 필요를 채워줄수 있는 환경을 만들었습니다.",
      imageName: "1.jpg",
      title: "모두가 간절히 갖고 싶지만",
      subTitle: "누구도 만들지 못하는 홈페이지",
      subTitle2: "당신의 것이 됩니다.",
      description: "직접 확인하세요.",
    },
    {
      active: false,
      name: "1:1 집중 시스템",
      info: "모든 교육 및 코칭은 일대일로 이루어집니다. 학생 담당 담임이 배정되어 학습량과 태도를 관리하며, 교과목 교사가 일대일로 수업을 진행합니다. 일대일 수업만이 학생의 집중력과 긴장감을 지속적으로 유지할 수 있습니다.",
      imageName: "2.jpg",
      title: "모두가 간절히 갖고 싶지만",
      subTitle: "누구도 만들지 못하는 홈페이지",
      subTitle2: "당신의 것이 됩니다.",
      description: "직접 확인하세요.",
    },
    {
      active: false,
      name: "철저한 점검 및 재확인",
      info: "담임을 포함한 국어, 영어, 수학 교과목 교사들이 학생이 집으로 돌아가는 시간까지 함께 같은 공간에 상주합니다. 하루 정해진 공부를 마친 후에는 담임에게 점검을 받으며, 목표에 도달하지 못한 경우 보충학습 공간에서 추가 학습을 진행합니다.",
      imageName: "3.jpg",
      title: "모두가 간절히 갖고 싶지만",
      subTitle: "누구도 만들지 못하는 홈페이지",
      subTitle2: "당신의 것이 됩니다.",
      description: "직접 확인하세요.",
    },
  ]);

  // 요소 클릭
  const activeListClick = (index) => {
    setKdRightList((prevState) => {
      const newState = prevState.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });
      return newState;
    });
    setCurrentIndex(index);
    setCurrentNumber(index + 1);
  };

  // 이전 클릭
  const activePrevList = () => {
    setCurrentIndex((prevCurrentIndex) => {
      const newIndex = prevCurrentIndex === 0 ? kdRightList.length - 1 : prevCurrentIndex - 1;
      setKdRightList((prevState) =>
        prevState.map((item, index) => ({
          ...item,
          active: index === newIndex,
        }))
      );
      setCurrentNumber((prevCurrentNumber) => newIndex + 1);
      return newIndex;
    });
  };

  //다음 클릭
  const activeNextList = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % kdRightList.length;
      setKdRightList((prevState) =>
        prevState.map((item, index) => ({
          ...item,
          active: index === nextIndex,
        }))
      );
      setCurrentNumber((prevCurrentNumber) => nextIndex + 1);
      return nextIndex;
    });
  };

  // 공통 함수
  const forBoth = () => {
    setTimeout(() => {
      setActiveGradient(true);
    }, 3500);
  };

  // 글자 깜빡이는 효과
  const controllOpacity = (elem) => {
    if (!elem.current || elem.current.length === 0) return;
    gsap.set(elem.current, {opacity: 0});

    let timeline = gsap.timeline();

    timeline.to(elem.current, {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      stagger: {
        from: "random",
        each: 0.02,
      },
    });

    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * elem.current.length);
      let randomSpan = elem.current[randomIndex];
      timeline.fromTo(
        randomSpan,
        {opacity: 0},
        {
          opacity: Math.random(),
          duration: 0.1,
          repeat: 2,
          yoyo: true,
          ease: "power2.inOut",
        },
        "<"
      );
    }
  };

  useLayoutEffect(() => {
    const updateText = () => {
      if (window.innerWidth <= 768) {
        setText("당신의 꿈을 이뤄드립니다.");
        setTextLines(textLinesMobile);
      } else {
        setText("빛솔 학원, 당신과 함께 꿈을 키워나갑니다.");
        setTextLines(textLinesPc);
      }
    };

    // 초기 실행
    updateText();

    // 리스너 등록
    window.addEventListener("resize", updateText);

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", updateText);
    };
  }, []);

  useEffect(() => {
    controllOpacity(lettersSubRef);
    controllOpacity(lettersTopRef);
  }, [text]);

  useEffect(() => {
    if (textLines) {
      gsap.registerPlugin(ScrollTrigger);
      forBoth();

      setTotalNumber(kdRightList.length);
      lettersRef.current.forEach((letter) => {
        gsap.set(letter, {yPercent: 100});
      });

      setTimeout(() => {
        lettersRef.current.forEach((letter, index) => {
          const lineDelay = Math.floor(index / 100) * (0.03 * textLines[0].length); // 각 줄의 시작 딜레이 계산
          const letterDelay = 0.03 * (index % 100); // 각 글자마다의 딜레이 계산
          gsap.fromTo(
            letter,
            {yPercent: 100},
            {
              yPercent: 0,
              delay: lineDelay + letterDelay, // 라인 딜레이와 글자 딜레이를 합칩니다.
              duration: 0.5,
              ease: "power4.out",
            }
          );
        });
      }, 1000); // 전체 애니메이션을 1초 뒤에 시작
    }
  }, []);

  if (!textLines) return;

  return (
    <section className={`kd-main-section6`}>
      <div className={`kd-main-container`}>
        <div className={`kd-main-front-wrap`}>
          <div className={`kd-main-front-background-wrap`}>
            <div className={`kd-main-front-background-inner`}>
              <div className={`kd-main-front-background-cover ${activeGradient ? "active" : ""}`}></div>
            </div>
          </div>
          <div className={`kd-main-front-top`}>
            <div className={`kd-main-front-left`}>
              <div className={`kd-main-front-left-inner`}>
                <p className="ten-top-text top">
                  {Array.from(subtext).map((letter, index) => (
                    <span key={index} ref={(el) => (lettersTopRef.current[index] = el)} className="project-portfolio-list-subject">
                      {letter !== " " ? letter : "\u00A0"}
                    </span>
                  ))}
                </p>
                <p className="ten-top-text big">
                  {Array.from(text).map((letter, index) => (
                    <span key={index} ref={(el) => (lettersSubRef.current[index] = el)} className="project-portfolio-list-subject">
                      {letter !== " " ? letter : "\u00A0"}
                    </span>
                  ))}
                </p>
                {textLines.map((line, index) => (
                  <p key={index} className="ten-top-text sub">
                    {Array.from(line).map((letter, letterIndex) => (
                      <span
                        key={index * 100 + letterIndex}
                        ref={(el) => (lettersRef.current[index * 100 + letterIndex] = el)}
                        className="project-portfolio-list-subject"
                      >
                        {letter !== " " ? letter : "\u00A0"}
                      </span>
                    ))}
                  </p>
                ))}
                <p className="ten-top-text sub"></p>
              </div>
            </div>
            <div className={`kd-main-front-right`}>
              <div className={`kd-main-front-right-list-wrap`}>
                {kdRightList &&
                  kdRightList.map((list, index) => (
                    <div
                      className={`kd-main-front-right-list ${list.active ? "active" : ""} `}
                      key={index}
                    >
                      <div className={`kd-main-front-right-list-inner`}></div>
                      <div className={`kd-main-list-image-wrap`}>
                        {list.vidName ? (
                          <video
                            className={`kd-main-list-video`}
                            src={`/kd-main-section/${list.vidName}`}
                            autoPlay
                            muted
                            playsInline
                            loop
                          ></video>
                        ) : (
                          <img className={`kd-main-list-image`} src={`/images/kd-main-section/${list.imageName}`} alt={list.name}/>
                        )}
                      </div>
                      <div className={`kd-main-front-text-wrap`}>
                        <p className={`kd-main-front-list-name`}>{list.name}</p>
                        <p className={`kd-main-front-list-info pc-only`}>{list.info}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
