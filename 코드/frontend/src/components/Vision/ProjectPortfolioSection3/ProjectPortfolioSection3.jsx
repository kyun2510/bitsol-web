import React, {useEffect, useRef, useState} from 'react';
import "./project-portfolio-section3.css";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import {NavLink} from "react-router-dom";

export default function ProjectPortfolioSection3(props) {
  const {
    windowWidth
  } = props;

  const [activeViewMore, setActiveViewMore] = useState(false)
  const [activeTop, setActiveTop] = useState(false)
  const lettersRef = useRef([]);
  const [portfolioList, setPortfolioList] = useState([
    {
      active: false,
      detailActive: false,
      name: '낮잠 공간 제공',
      link: '/contact',
      subTitle: '',
      subject: [],
      logoImage: '',
      technology: [
        {
          active: false,
          text: '기억력 증진',
        },
        {
          active: true,
          text: '원기 회복'
        }
      ],
      ceoName: '류하솜 카넥트 대표',
      ceoImage: '',
      review: [
        '25분을 기준으로 통제 하여 낮잠 공간을 제공'
      ],
      ai: [
        {
          active: false,
          text: '남/ 여 분리 하여 최적의 낮잠 공간을 만들었습니다.',
          mobiletext: '남/ 여 분리 하여 최적의 낮잠 공간'
        },
      ],
      design: [
        {
          active: false,
          text: '기억력을 좋아지게 하고 몸을 개운하게 하여 원기를 회복',
          mobiletext: '기억력을 좋아지게 하고 몸을 개운하게 하여 원기를 회복'
        },
      ],
      // videoName: 'car.mp4',
      imageName: '1.png',
      typingTechnology: '',
      typingReview: ''
    },
    {
      active: false,
      detailActive: false,
      name: '식사 제공',
      link: '/contact',
      subTitle: '이런 제품소개 홈페이지 보셨습니까?',
      subject: ['제', '품', ' ', '강', '점', '이', ' ', '10', '배', ' ', '어', '필', '되', '는', ' ', '홈', '페', '이', '지'],
      logoImage: 'ban.png',
      technology: [
        {
          active: false,
          text: '좋은 재료',
        },
        {
          active: true,
          text: '다양한 조리 가능'
        }
      ],
      ceoName: '진형건 반석전자 대표',
      ceoImage: 'ban.png',
      review: '양질의 식사를 위해 좋은재료의 도시락 제공',
      ai: [
        {
          active: false,
          text: '지하 식당이 따로 운영되어 분리된 공간에서 식사를 하게 됩니다.',
          mobiletext: "지하 식당이 따로 운영되어 분리된 공간에서 식사"

        },
      ],
      design: [
        {
          active: false,
          text: '양질의 식사는 학습 효율성을 높이는 데 중요한 역할',
          mobiletext: "양질의 식사는 학습 효율성을 높이는 데 중요한 역할"
        },
      ],
      imageName: '2.jpg',
      typingTechnology: '',
      typingReview: ''
    },
    {
      active: false,
      detailActive: false,
      name: '체력 관리',
      link: '/contact',
      subTitle: '이런 전환률 높은 홈페이지 보셨습니까?',
      subject: ['상', '담', '문', '의', '/', '매', '출', '이', ' ', '10', '배', ' ', '오', '르', '는', ' ', '홈', '페', '이', '지'],
      logoImage: 'euno.png',
      technology: [
        {
          active: false,
          text: '몰입력'
        },
        {
          active: true,
          text: '집중력 기억력 향상'
        },
      ],
      ceoName: '김동현 은오 대표 변호사',
      ceoImage: '',
      review: [
        '피트니스 센터 등록을 원치 않는 학생의 경우 설정해 놓은 코스대로 산책 및 조깅이 필수',
      ],
      ai: [
        {
          active: false,
          text: '피트니스 센터와 제휴를 맺고 있습니다.',
          mobiletext: "피트니스 센터와 제휴"

        },
      ],
      design: [
        {
          active: false,
          text: '공부와 목표에 더 깊이 몰입 하기 위해 운동을 해야 합니다.',
          mobiletext: "공부와 목표에 더 깊은 몰입 위해 필요"
        },
      ],
      imageName: '3.jpg',
      typingTechnology: '',
      typingReview: ''
    },
  ])

  const projectPortRef = useRef()
  const textLines = [
    "체계적인 관리",
    "빛솔학원 학생들의 컨디션 관리도",
    "놓치지 않습니다.",
  ];

  // 공통 함수
  const forBoth = () => {
    gsap.to('.project-portfolio-top', {
      scrollTrigger: {
        trigger: '.project-portfolio-top',
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

    const projectPortfolioBottomList = document.querySelectorAll('.project-portfolio-bottom-list');
    const projectVideoList = document.querySelectorAll('.project-portfolio-list-contents-inner video');

    gsap.to('.project-portfolio-section3', {
      scrollTrigger: {
        trigger: '.project-portfolio-section3',
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () => {
          projectVideoList.forEach(video => {
            video.play()
          })
        },
        onEnterBack: () => {
          projectVideoList.forEach(video => {
            video.play()
          })
        },
        onLeave: () => {
          projectVideoList.forEach(video => {
            video.play()
          })
        },
        onLeaveBack: () => {
          projectVideoList.forEach(video => {
            video.pause()
          })
        }
      }
    })

    gsap.to(projectPortRef.current, {
      scrollTrigger: {
        trigger: '.project-portfolio-section3',
        start: "2% top",
        scrub: true,
        markers: false,
        onEnter: () => {
          projectPortRef.current.classList.add('active')
        },
        onEnterBack: () => {
          projectPortRef.current.classList.add('active')
        },
        onLeave: () => {
          projectPortRef.current.classList.remove('active')
        },
        onLeaveBack: () => {
          projectPortRef.current.classList.remove('active')
        }
      }
    })


    projectPortfolioBottomList.forEach((list, index) => {
      gsap.to(list, {
        scrollTrigger: {
          trigger: list,
          start: windowWidth > 768 ? "top center" : "top 25%",
          end: windowWidth > 768 ? "top center" : "top 25%",
          scrub: true,
          duration: 0,
          markers: false,
          onEnter: () => {
            list.classList.add('active')
            setPortfolioList(prevState => {
              const newState = prevState.map((item, numb) => {
                if (numb === index) {
                  return {
                    ...item,
                    detailActive: true
                  };
                } else {
                  return {
                    ...item
                  };
                }
              });
              return newState;
            });
            setTimeout(() => {

              // controllOpacity(index+1)
            }, 500)
            setTimeout(() => {
              // espFourReviewTyping(portfolioList[index].review, index);
            }, 1500)
          },
          onEnterBack: () => {
            list.classList.add('active')
          },
          onLeaveBack: () => {
            // opacityRollBack(index+1)
            list.classList.remove('active');
            setPortfolioList(prevState => {
              const newState = prevState.map((item, i) => {
                if (i === index) {
                  return {
                    ...item,
                    detailActive: false,
                    typingReview: ''
                  };
                } else {
                  return {
                    ...item
                  };
                }
              });
              return newState;
            });
          }
        }
      })
    })

    const visionSpaceRightWrap = document.querySelectorAll(".vision-space-right-wrap");

    visionSpaceRightWrap.forEach((wrap, index) => {
      gsap.to(wrap, {
        scrollTrigger: {
          trigger: wrap,
          start: "top center",
          end: "top center",
          markers: false,
          onEnter: () => {
            wrap.classList.add("active");
          },
          onLeaveBack: () => {
            wrap.classList.remove("active");
          },
        },
      });
    })
  }

  // 중앙 텍스트 타이핑
  const espFourTechnologyTyping = async (technology, review, index) => {
    let currentText = '';
    for (let i = 0; i < technology.length; i++) {
      currentText += technology[i];
      setPortfolioList(prevState => {
        const newState = prevState.map((item, numb) => {
          if (numb === index) {
            return {
              ...item,
              typingTechnology: currentText
            };
          } else {
            return {
              ...item
            };
          }
        });
        return newState;
      });
      await new Promise(resolve => setTimeout(resolve, 15));
      if (i == technology.length - 1) {
        espFourReviewTyping(review, index)
      }
    }
  }
  const espFourReviewTyping = async (review, index) => {
    let currentText = '';
    for (let i = 0; i < review.length; i++) {
      currentText += review[i];
      setPortfolioList(prevState => {
        const newState = prevState.map((item, numb) => {
          if (numb === index) {
            return {
              ...item,
              typingReview: currentText
            };
          } else {
            return {
              ...item
            };
          }
        });
        return newState;
      });
      await new Promise(resolve => setTimeout(resolve, 15));
      if (i == review.length - 1) {

      }
    }
  }

  const controllOpacity = (index) => {
    const subject = document.querySelectorAll(`.project-portfolio-list-subject${index}`)

    // gsap.set(subject, { opacity: 0 });

    let timeline = gsap.timeline();

    timeline.to(subject, {
      opacity: 1,
      duration: 1,
      stagger: {
        from: "random",
        each: 0.1
      }
    });

    for (let i = 0; i < 12; i++) {
      let randomSpan = document.querySelectorAll(`.project-portfolio-list-subject${index}`)[Math.floor(Math.random() * document.querySelectorAll(`.project-portfolio-list-subject${index}`).length)];

      timeline.fromTo(randomSpan, {opacity: 0}, {
        opacity: Math.random(),
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        ease: "power2.inOut"
      }, "<");
    }
  }

  const opacityRollBack = (index) => {
    const subject = document.querySelectorAll(`.project-portfolio-list-subject${index}`)

    gsap.set(subject, {opacity: 0});
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    forBoth()
  }, []);

  return (
    <section className={`project-portfolio-section3`} ref={projectPortRef} id={`portfolio-main`}>
      <div className={`project-portfolio-container`}>
        <div className={`project-portfolio-top ${activeTop ? 'active' : ''}`}>
          <h4 className={`project-portfolio-title`}>
            More Efficient Study
          </h4>
          {textLines.map((line, index) => (
            <div className={`project-portfolio-sub-title-line`} key={index}>
              {Array.from(line).map((letter, i) => (
                <p
                  key={i}
                  className={`project-portfolio-sub-title ${index === 0 ? 'bold' : ''}`}
                  ref={el => lettersRef.current[index * 100 + i] = el}
                >
                  {letter !== ' ' ? letter : '\u00A0'}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className={`project-portfolio-bottom`}>
          {portfolioList && portfolioList.map((list, index) => (
            <div
              className={`project-portfolio-bottom-list-wrap ${index === 1 && 'middle'}  ${index === 2 && 'long'} ${index === 3 && 'middle'} ${index === 4 && 'middle'}`}
              key={index}>
              <div className={`project-portfolio-bottom-list ${list.active ? 'active' : ''}`}
                   id={`portfolio-${index + 1}`} key={index}>
                <div className={`project-portfolio-bottom-list-inner`}>
                  <div className={`project-portfolio-list-topabs`}></div>
                  <div className={`project-portfolio-list-text-wrap ${list.detailActive ? 'active' : ''}`}>
                    <div className={`project-portfolio-list-text-clip`}>

                      <div className={`project-portfolio-company-wrap`}>
                        <p className={`project-portfolio-list-name`}>
                          {list.name}
                        </p>
                        <NavLink to={list.link} className={`project-portfolio-list-link`}>
                          <div className="tour-expan-bottom-link-inner">
                            <span> 문의하기 </span>
                            <span> 문의하기 </span>
                          </div>
                        </NavLink>
                      </div>

                      <div className={`project-portfolio-technology-wrap`}>
                        {list.technology.map((tech, index) => (
                          <div className={`project-portfolio-right-text-box ${tech.active ? 'red' : ''}`}
                               key={index}>
                            <p className={`project-portfolio-right-text tech`}>
                              #{tech.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className={`project-portfolio-list-detail-wrap`}>
                        <div className={`project-portfolio-list-name-wrap`}>
                          <div className={`project-portfolio-list-left`}>
                            <p className={`project-portfolio-left-subject`}>
                              <span className='pc-only'>빛솔만의 차별성</span>
                              <span className='mobile-only'>차별성</span>
                            </p>
                          </div>
                          <div className={`project-portfolio-list-right`}>
                            {list.ai.map((rel, numb) => (
                              <p className={`project-portfolio-relative-text ${rel.active ? 'bold' : ''}`} key={numb}>
                                {windowWidth > 768 ? rel.text : rel.mobiletext}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className={`project-portfolio-list-name-wrap`}>
                          <div className={`project-portfolio-list-left`}>
                            <p className={`project-portfolio-left-subject`}>
                              <span className='pc-only'>필요한 이유</span>
                              <span className='mobile-only'>필요성</span>
                            </p>
                          </div>
                          <div className={`project-portfolio-list-right`}>
                            {list.design.map((rel, numb) => (
                              <p className={`project-portfolio-relative-text design`} key={numb}>
                                {/* {rel.text} */}
                                {windowWidth > 768 ? rel.text : rel.mobiletext}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className={`project-portfolio-list-name-wrap`}>
                          <div className={`project-portfolio-list-left`}>
                            <p className={`project-portfolio-left-subject`}>
                              실행
                            </p>
                          </div>
                          <div className={`project-portfolio-review-right`}>
                            <p className={`project-portfolio-right-text forbidden`}>
                              {list.review}
                            </p>
                            <p className={`project-portfolio-right-text float`}>
                              {list.typingReview}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`project-portfolio-list-contents-wrap`}>
                    <div className={`project-portfolio-list-wide-bar`}></div>
                    <div className={`project-portfolio-list-contents-inner`}>
                      <div className={`project-portfolio-list-contents-line`}>
                        {list.imageName ?
                          <img
                            className={`project-portfolio-list-image`}
                            src={`/images/project-portfolio-section/${list.imageName}`}
                            alt={list.name}
                          />
                          :
                          <video className={`project-portfolio-list-image`} src={`/images/project-portfolio-section/${list.videoName}`} muted loop playsInline/>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
