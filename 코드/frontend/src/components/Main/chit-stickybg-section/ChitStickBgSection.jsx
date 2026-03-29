import React, {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "../chit-stickybg-section/chit-stickybg-section.css";

gsap.registerPlugin(ScrollTrigger);

export default function ChitStickBgSection({windowWidth}) {
  
  useEffect(() => {
    const chitStickyBgBackPosi = document.querySelector(
      ".chit-stickybg-back-posi"
    );
    const chitStickyBgRightBox = document.querySelectorAll(
      ".chit-stickybg-right-box"
    );

    if (window.innerWidth >= 768) {
      gsap.to(".chit-stickybg-right-box1", {
        scrollTrigger: {
          trigger: ".chit-stickybg-right-box1",
          markers: false,
          start: "center center",
          end: "center center",
          scrub: true,
          onEnter: function () {
            for (let i = 0; i < chitStickyBgRightBox.length; i++) {
              chitStickyBgRightBox[i].classList.remove("active");
            }
            chitStickyBgRightBox[0].classList.add("active");
          },
          onEnterBack: function () {
            for (let i = 0; i < chitStickyBgRightBox.length; i++) {
              chitStickyBgRightBox[i].classList.remove("active");
            }
            chitStickyBgRightBox[0].classList.add("active");
            chitStickyBgBackPosi.classList.remove("active2");
            chitStickyBgBackPosi.classList.add("active1");
          },
        },
      });

      gsap.to(".chit-stickybg-right-box2", {
        scrollTrigger: {
          trigger: ".chit-stickybg-right-box2",
          markers: false,
          start: "center center",
          end: "center center",
          scrub: true,
          onEnter: function () {
            for (let i = 0; i < chitStickyBgRightBox.length; i++) {
              chitStickyBgRightBox[i].classList.remove("active");
            }
            chitStickyBgRightBox[1].classList.add("active");
          },
          onEnterBack: function () {
            for (let i = 0; i < chitStickyBgRightBox.length; i++) {
              chitStickyBgRightBox[i].classList.remove("active");
            }
            chitStickyBgRightBox[1].classList.add("active");
          },
        },
      });

      gsap.to(".chit-stickybg-right-box3", {
        scrollTrigger: {
          trigger: ".chit-stickybg-right-box3",
          markers: false,
          start: "center center",
          end: "center center",
          scrub: true,
          onEnter: function () {
            for (let i = 0; i < chitStickyBgRightBox.length; i++) {
              chitStickyBgRightBox[i].classList.remove("active");
            }
            chitStickyBgRightBox[2].classList.add("active");
            chitStickyBgBackPosi.classList.remove("active1");
            chitStickyBgBackPosi.classList.add("active2");
          },
          onEnterBack: function () {
            for (let i = 0; i < chitStickyBgRightBox.length; i++) {
              chitStickyBgRightBox[i].classList.remove("active");
            }
            chitStickyBgRightBox[2].classList.add("active");
          },
        },
      });

      gsap.to(".chit-stickybg-right-box4", {
        scrollTrigger: {
          trigger: ".chit-stickybg-right-box4",
          markers: false,
          start: "center center",
          end: "center center",
          scrub: true,
          onEnter: function () {
            for (let i = 0; i < chitStickyBgRightBox.length; i++) {
              chitStickyBgRightBox[i].classList.remove("active");
            }
            chitStickyBgRightBox[3].classList.add("active");
          },
          onEnterBack: function () {
            for (let i = 0; i < chitStickyBgRightBox.length; i++) {
              chitStickyBgRightBox[i].classList.remove("active");
            }
            chitStickyBgRightBox[3].classList.add("active");
          },
        },
      });
    }
  }, []);

  return (
    <section className="chit-stickybg-section">
      <div className="chit-stickybg-container">
        <div className="chit-stickybg-back">
          <div className="chit-stickybg-back-posi active1">
            <div className="chit-stickybg-back-cover"></div>
            <img
              className="chit-stickybg-back-img chit-stickybg-back-img1"
              src="/images/chit-stickybg-section/b1.png"
              alt="빛솔학원"
            />
            <img
              className="chit-stickybg-back-img chit-stickybg-back-img2"
              src="/images/chit-stickybg-section/b3.png"
              alt="빛솔학원"
            />
          </div>
        </div>
        <div className="chit-stickybg-front">
          <div className="chit-stickybg-front-inner">
            <div className="chit-stickybg-left">
              <h3 className="chit-stickybg-title">
                빛솔 학생들의
                <br/>
                리얼후기
              </h3>
              <h4 className="chit-stickybg-sub-title"></h4>
            </div>
            {windowWidth > 768 ? (
              <>
                <div className="chit-stickybg-right">
                  <ul className="chit-stickybg-right-inner">
                    <li className="chit-stickybg-right-box chit-stickybg-right-box1 active">
                      <div className="chit-stickybg-right-box-top"></div>
                      <div className="chit-stickybg-right-box-bottom">
                        <img
                          className="chit-stickybg-right-box-img"
                          src="/images/chit-stickybg-section/e1.png"
                          alt="빛솔학원"
                        />
                        <h4 className="chit-box-title">“이00학생”</h4>
                        <p className="chit-box-desc">
                          선생님 저 단 1분도 헛것으로
                          <br className="pc-only"/>
                          보내지 않은 하루가 많았어요.
                        </p>
                      </div>
                    </li>
                    <li className="chit-stickybg-right-box chit-stickybg-right-box3">
                      <div className="chit-stickybg-right-box-top"></div>
                      <div className="chit-stickybg-right-box-bottom">
                        <img
                          className="chit-stickybg-right-box-img"
                          src="/images/chit-stickybg-section/e3.png"
                          alt="빛솔학원"
                        />
                        <h4 className="chit-box-title">“김00학생”</h4>
                        <p className="chit-box-desc">
                          저에게 새로운 세계를 열어준 것 같아요.
                          <br/>
                          많은 도움을 받고 항상 감사합니다.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <ul className="chit-stickybg-right-inner">
                    <li className="chit-stickybg-right-box chit-stickybg-right-box2">
                      <div className="chit-stickybg-right-box-top"></div>
                      <div className="chit-stickybg-right-box-bottom">
                        <img
                          className="chit-stickybg-right-box-img"
                          src="/images/chit-stickybg-section/e2.png"
                          alt="빛솔학원"
                        />
                        <h4 className="chit-box-title">“정00학생”</h4>
                        <p className="chit-box-desc">
                          제 학습 방식과 태도에 대해 많이
                          <br/>
                          고민하게 되었어요.
                        </p>
                      </div>
                    </li>

                    <li className="chit-stickybg-right-box chit-stickybg-right-box4">
                      <div className="chit-stickybg-right-box-top"></div>
                      <div className="chit-stickybg-right-box-bottom">
                        <img
                          className="chit-stickybg-right-box-img"
                          src="/images/chit-stickybg-section/e4.png"
                          alt="빛솔학원"
                        />
                        <h4 className="chit-box-title">“박00학생”</h4>
                        <p className="chit-box-desc">
                          학교에서는 이해하지 못했던 개념들도
                          <br/>잘 이해할 수 있게 되었어요.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Swiper
                  spaceBetween={40}
                  centeredSlides={true}
                  navigation={true}
                  modules={[Navigation, Autoplay]}
                  allowTouchMove={true}
                  touchEventsTarget="wrapper"
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <li className="chit-stickybg-right-box chit-stickybg-right-box1 active">
                      <div className="chit-stickybg-right-box-bottom">
                        <img
                          className="chit-stickybg-right-box-img"
                          src="/images/chit-stickybg-section/e1.png"
                          alt="빛솔학원"
                        />
                        <h4 className="chit-box-title">“000학생”</h4>
                        <p className="chit-box-desc">
                          선생님 저 단 1분도 헛것으로
                          <br/>
                          보내지 않은 하루가 많았어요.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li className="chit-stickybg-right-box chit-stickybg-right-box2">
                      <div className="chit-stickybg-right-box-bottom">
                        <img
                          className="chit-stickybg-right-box-img"
                          src="/images/chit-stickybg-section/e2.png"
                          alt="빛솔학원"
                        />
                        <h4 className="chit-box-title">“000학생”</h4>
                        <p className="chit-box-desc">
                          제 학습 방식과 태도에 대해 많이
                          <br/>
                          고민하게 되었어요.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li className="chit-stickybg-right-box chit-stickybg-right-box3">
                      <div className="chit-stickybg-right-box-bottom">
                        <img
                          className="chit-stickybg-right-box-img"
                          src="/images/chit-stickybg-section/e3.png"
                          alt="빛솔학원"
                        />
                        <h4 className="chit-box-title">“000학생”</h4>
                        <p className="chit-box-desc">
                          저에게 새로운 세계를 열어준 것 같아요.
                          <br/>
                          많은 도움을 받고 항상 감사합니다.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li className="chit-stickybg-right-box chit-stickybg-right-box4">
                      <div className="chit-stickybg-right-box-bottom">
                        <img
                          className="chit-stickybg-right-box-img"
                          src="/images/chit-stickybg-section/e4.png"
                          alt="빛솔학원"
                        />
                        <h4 className="chit-box-title">“000학생”</h4>
                        <p className="chit-box-desc">
                          학교에서는 이해하지 못했던 개념들도
                          <br/>잘 이해할 수 있게 되었어요.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                </Swiper>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
