import './msyClick-swiper-section.css';
import {useEffect} from "react";

export default function MsyClickSwiperSection() {

  useEffect(() => {
    const btnsUnits = document.querySelectorAll('.swiper-btns-unit');
    const changeUnits = document.querySelectorAll('.swiper-change-unit');
    const btnUnits = document.querySelectorAll('.btn-unit');

    let currentIndex = 0;  // 현재 활성화된 인덱스를 추적

    // 각 btns-unit에 클릭 이벤트 리스너 추가
    btnsUnits.forEach((unit, index) => {
      unit.addEventListener('click', () => {
        activateUnit(index);  // 해당 인덱스의 unit 활성화
      });
    });

    // 이전 버튼 로직
    btnUnits[0].addEventListener('click', () => {
      // 이전 항목 활성화
      currentIndex = (currentIndex - 1 + btnsUnits.length) % btnsUnits.length;
      activateUnit(currentIndex);
    });

    // 다음 버튼 로직
    btnUnits[1].addEventListener('click', () => {
      // 다음 항목 활성화
      currentIndex = (currentIndex + 1) % btnsUnits.length;
      activateUnit(currentIndex);
    });

    function activateUnit(index) {
      // 모든 units에서 active 클래스 제거
      btnsUnits.forEach(unit => unit.classList.remove('active'));
      changeUnits.forEach(unit => unit.classList.remove('active'));

      // 선택된 index에 active 클래스 추가
      setTimeout(() => {
        btnsUnits[index].classList.add('active');
        changeUnits[index].classList.add('active');
      }, 400);

      // 현재 인덱스 업데이트
      currentIndex = index;
    }
  }, []);

  return (
    <section className="msyClick-swiper-section">
      <div className="padding-wapper">
        <div className="hoo-top-units-wrap">
          <div className="top-left-wrap">
            <p className="top-mini-text">
              같은 점수임에도 완전히 다른 결과가 나올수 있습니다.<br/>
              최적의 학과부터 지원군 까지 컨설팅 하고 있습니다.
            </p>
            <p className="top-big-text">빛솔 밀착관리 시스템</p>
          </div>
          <div className="top-btns-wrap">
            <div className="btn-unit">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-55 h-auto" fill="none" viewBox="0 0 55 55">
                <circle cx="27.058" cy="27.059" r="26.809"
                        stroke="url(#paint0_linear_1621_3648)" strokeWidth="0.5"
                        transform="rotate(90 27.058 27.059)">
                </circle>
                <g className="btn-slider-left__arrow-1 relative">
                  <path stroke="#F4F4F4" strokeMiterlimit="10" strokeWidth="0.5"
                        d="M37.117 27h-20M21.117 23l-4 4 4 4"></path>
                </g>
                <g className="btn-slider-left__arrow-2 absolute top-0 left-0">
                  <path stroke="#F4F4F4" strokeMiterlimit="10" strokeWidth="0.5"
                        d="M37.117 27h-20M21.117 23l-4 4 4 4"></path>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1621_3648" x1="27.248" x2="27.248" y1="53.912"
                                  y2="0.15" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="btn-unit">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-55 h-auto" fill="none" viewBox="0 0 55 55">
                <circle cx="27.177" cy="27.059" r="26.809" stroke="url(#paint0_linear_1621_3653)"
                        strokeWidth="0.5" transform="rotate(90 27.177 27.059)"></circle>
                <g className="btn-slider-right__arrow-1 relative">
                  <path stroke="#F4F4F4" strokeMiterlimit="10" strokeWidth="0.5"
                        d="M17.118 27h20M33.118 23l4 4-4 4"></path>
                </g>
                <g className="btn-slider-right__arrow-2 absolute top-0 left-0">
                  <path stroke="#F4F4F4" strokeMiterlimit="10" strokeWidth="0.5"
                        d="M17.118 27h20M33.118 23l4 4-4 4"></path>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1621_3653" x1="27.367" x2="27.367" y1="53.912"
                                  y2="0.15" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="swiper-btns-wrapper">
          <div className="swiper-btns-unit active">
            <p className="btn-context">
              개별 맞춤 <br/>입시 커리큘럼
            </p>
            <div className="star-svg-tag">
              <svg className="w-full h-full translate-x-[-1rem]" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 84 22">
                <g filter="url(#filter0_f_479_11796_new)" opacity="0.73">
                  <ellipse cx="39" cy="11" fill="url(#paint0_linear_479_11796_new)" rx="2" ry="39"
                           transform="rotate(90 39 11)"></ellipse>
                </g>
                <g filter="url(#filter1_f_479_11796_new)">
                  <ellipse cx="68" cy="11" fill="url(#paint1_linear_479_11796_new)" rx="2" ry="10"
                           transform="rotate(90 68 11)"></ellipse>
                </g>
                <g filter="url(#filter2_f_479_11796_new)" opacity="0.21">
                  <ellipse cx="64" cy="11" fill="url(#paint2_linear_479_11796_new)" rx="5" ry="14"
                           transform="rotate(90 64 11)"></ellipse>
                </g>
                <g filter="url(#filter3_f_479_11796_new)">
                  <ellipse cx="72" cy="11" fill="url(#paint3_linear_479_11796_new)" rx="1" ry="6"
                           transform="rotate(90 72 11)"></ellipse>
                </g>
                <path stroke="url(#paint4_linear_479_11796_new)" strokeWidth="0.5" d="M22 10.75L78 10.75"></path>
                <defs>
                  <filter id="filter0_f_479_11796_new" width="90" height="16" x="-6" y="3"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter1_f_479_11796_new" width="24" height="8" x="56" y="7"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="1"></feGaussianBlur>
                  </filter>
                  <filter id="filter2_f_479_11796_new" width="40" height="22" x="44" y="0"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter3_f_479_11796_new" width="20" height="10" x="62" y="6"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="2"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_479_11796_new" x1="39" x2="39" y1="-28" y2="50"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3bc1ff"></stop>
                    <stop offset="0.552" stopColor="#3bc1ff" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#3bc1ff" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_479_11796_new" x1="68" x2="68" y1="1" y2="21"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3bc1ff"></stop>
                    <stop offset="0.552" stopColor="#3bc1ff" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#3bc1ff" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_479_11796_new" x1="64" x2="64" y1="-3" y2="25"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3bc1ff"></stop>
                    <stop offset="1" stopColor="#3bc1ff" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint3_linear_479_11796_new" x1="72" x2="72" y1="5" y2="17"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3bc1ff"></stop>
                    <stop offset="1" stopColor="#3bc1ff" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint4_linear_479_11796_new" x1="76.353" x2="18.706" y1="11.5" y2="11.5"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3bc1ff"></stop>
                    <stop offset="1" stopColor="#3bc1ff" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="swiper-btns-unit">
            <p className="btn-context">
              밀착 관리
            </p>
            <div className="star-svg-tag">
              <svg className="w-full h-full translate-x-[-1rem]" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 84 22">
                <g filter="url(#filter0_f_479_11796_new)" opacity="0.73">
                  <ellipse cx="39" cy="11" fill="url(#paint0_linear_479_11796_new)" rx="2" ry="39"
                           transform="rotate(90 39 11)"></ellipse>
                </g>
                <g filter="url(#filter1_f_479_11796_new)">
                  <ellipse cx="68" cy="11" fill="url(#paint1_linear_479_11796_new)" rx="2" ry="10"
                           transform="rotate(90 68 11)"></ellipse>
                </g>
                <g filter="url(#filter2_f_479_11796_new)" opacity="0.21">
                  <ellipse cx="64" cy="11" fill="url(#paint2_linear_479_11796_new)" rx="5" ry="14"
                           transform="rotate(90 64 11)"></ellipse>
                </g>
                <g filter="url(#filter3_f_479_11796_new)">
                  <ellipse cx="72" cy="11" fill="url(#paint3_linear_479_11796_new)" rx="1" ry="6"
                           transform="rotate(90 72 11)"></ellipse>
                </g>
                <path stroke="url(#paint4_linear_479_11796_new)" strokeWidth="0.5" d="M22 10.75L78 10.75"></path>
                <defs>
                  <filter id="filter0_f_479_11796_new" width="90" height="16" x="-6" y="3"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter1_f_479_11796_new" width="24" height="8" x="56" y="7"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="1"></feGaussianBlur>
                  </filter>
                  <filter id="filter2_f_479_11796_new" width="40" height="22" x="44" y="0"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter3_f_479_11796_new" width="20" height="10" x="62" y="6"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="2"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_479_11796_new" x1="39" x2="39" y1="-28" y2="50"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_479_11796_new" x1="68" x2="68" y1="1" y2="21"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_479_11796_new" x1="64" x2="64" y1="-3" y2="25"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint3_linear_479_11796_new" x1="72" x2="72" y1="5" y2="17"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint4_linear_479_11796_new" x1="76.353" x2="18.706" y1="11.5" y2="11.5"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="swiper-btns-unit">
            <p className="btn-context">
              선행 목표 <br/>시스템
            </p>
            <div className="star-svg-tag">
              <svg className="w-full h-full translate-x-[-1rem]" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 84 22">
                <g filter="url(#filter0_f_479_11796_new)" opacity="0.73">
                  <ellipse cx="39" cy="11" fill="url(#paint0_linear_479_11796_new)" rx="2" ry="39"
                           transform="rotate(90 39 11)"></ellipse>
                </g>
                <g filter="url(#filter1_f_479_11796_new)">
                  <ellipse cx="68" cy="11" fill="url(#paint1_linear_479_11796_new)" rx="2" ry="10"
                           transform="rotate(90 68 11)"></ellipse>
                </g>
                <g filter="url(#filter2_f_479_11796_new)" opacity="0.21">
                  <ellipse cx="64" cy="11" fill="url(#paint2_linear_479_11796_new)" rx="5" ry="14"
                           transform="rotate(90 64 11)"></ellipse>
                </g>
                <g filter="url(#filter3_f_479_11796_new)">
                  <ellipse cx="72" cy="11" fill="url(#paint3_linear_479_11796_new)" rx="1" ry="6"
                           transform="rotate(90 72 11)"></ellipse>
                </g>
                <path stroke="url(#paint4_linear_479_11796_new)" strokeWidth="0.5" d="M22 10.75L78 10.75"></path>
                <defs>
                  <filter id="filter0_f_479_11796_new" width="90" height="16" x="-6" y="3"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter1_f_479_11796_new" width="24" height="8" x="56" y="7"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="1"></feGaussianBlur>
                  </filter>
                  <filter id="filter2_f_479_11796_new" width="40" height="22" x="44" y="0"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter3_f_479_11796_new" width="20" height="10" x="62" y="6"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="2"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_479_11796_new" x1="39" x2="39" y1="-28" y2="50"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_479_11796_new" x1="68" x2="68" y1="1" y2="21"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_479_11796_new" x1="64" x2="64" y1="-3" y2="25"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint3_linear_479_11796_new" x1="72" x2="72" y1="5" y2="17"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint4_linear_479_11796_new" x1="76.353" x2="18.706" y1="11.5" y2="11.5"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="swiper-btns-unit">
            <p className="btn-context">
              주의력 분산 <br/>차단 시스템
            </p>
            <div className="star-svg-tag">
              <svg className="w-full h-full translate-x-[-1rem]" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 84 22">
                <g filter="url(#filter0_f_479_11796_new)" opacity="0.73">
                  <ellipse cx="39" cy="11" fill="url(#paint0_linear_479_11796_new)" rx="2" ry="39"
                           transform="rotate(90 39 11)"></ellipse>
                </g>
                <g filter="url(#filter1_f_479_11796_new)">
                  <ellipse cx="68" cy="11" fill="url(#paint1_linear_479_11796_new)" rx="2" ry="10"
                           transform="rotate(90 68 11)"></ellipse>
                </g>
                <g filter="url(#filter2_f_479_11796_new)" opacity="0.21">
                  <ellipse cx="64" cy="11" fill="url(#paint2_linear_479_11796_new)" rx="5" ry="14"
                           transform="rotate(90 64 11)"></ellipse>
                </g>
                <g filter="url(#filter3_f_479_11796_new)">
                  <ellipse cx="72" cy="11" fill="url(#paint3_linear_479_11796_new)" rx="1" ry="6"
                           transform="rotate(90 72 11)"></ellipse>
                </g>
                <path stroke="url(#paint4_linear_479_11796_new)" strokeWidth="0.5" d="M22 10.75L78 10.75"></path>
                <defs>
                  <filter id="filter0_f_479_11796_new" width="90" height="16" x="-6" y="3"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter1_f_479_11796_new" width="24" height="8" x="56" y="7"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="1"></feGaussianBlur>
                  </filter>
                  <filter id="filter2_f_479_11796_new" width="40" height="22" x="44" y="0"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter3_f_479_11796_new" width="20" height="10" x="62" y="6"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="2"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_479_11796_new" x1="39" x2="39" y1="-28" y2="50"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_479_11796_new" x1="68" x2="68" y1="1" y2="21"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_479_11796_new" x1="64" x2="64" y1="-3" y2="25"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint3_linear_479_11796_new" x1="72" x2="72" y1="5" y2="17"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint4_linear_479_11796_new" x1="76.353" x2="18.706" y1="11.5" y2="11.5"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="swiper-btns-unit">
            <p className="btn-context">
              낮잠 공간 <br/>제공 및 통제
            </p>
            <div className="star-svg-tag">
              <svg className="w-full h-full translate-x-[-1rem]" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 84 22">
                <g filter="url(#filter0_f_479_11796_new)" opacity="0.73">
                  <ellipse cx="39" cy="11" fill="url(#paint0_linear_479_11796_new)" rx="2" ry="39"
                           transform="rotate(90 39 11)"></ellipse>
                </g>
                <g filter="url(#filter1_f_479_11796_new)">
                  <ellipse cx="68" cy="11" fill="url(#paint1_linear_479_11796_new)" rx="2" ry="10"
                           transform="rotate(90 68 11)"></ellipse>
                </g>
                <g filter="url(#filter2_f_479_11796_new)" opacity="0.21">
                  <ellipse cx="64" cy="11" fill="url(#paint2_linear_479_11796_new)" rx="5" ry="14"
                           transform="rotate(90 64 11)"></ellipse>
                </g>
                <g filter="url(#filter3_f_479_11796_new)">
                  <ellipse cx="72" cy="11" fill="url(#paint3_linear_479_11796_new)" rx="1" ry="6"
                           transform="rotate(90 72 11)"></ellipse>
                </g>
                <path stroke="url(#paint4_linear_479_11796_new)" strokeWidth="0.5" d="M22 10.75L78 10.75"></path>
                <defs>
                  <filter id="filter0_f_479_11796_new" width="90" height="16" x="-6" y="3"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter1_f_479_11796_new" width="24" height="8" x="56" y="7"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="1"></feGaussianBlur>
                  </filter>
                  <filter id="filter2_f_479_11796_new" width="40" height="22" x="44" y="0"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter3_f_479_11796_new" width="20" height="10" x="62" y="6"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="2"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_479_11796_new" x1="39" x2="39" y1="-28" y2="50"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_479_11796_new" x1="68" x2="68" y1="1" y2="21"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_479_11796_new" x1="64" x2="64" y1="-3" y2="25"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint3_linear_479_11796_new" x1="72" x2="72" y1="5" y2="17"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint4_linear_479_11796_new" x1="76.353" x2="18.706" y1="11.5" y2="11.5"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="swiper-btns-unit">
            <p className="btn-context">
              양질의 식사, <br className='pc-only'/>운동 제공
            </p>
            <div className="star-svg-tag">
              <svg className="w-full h-full translate-x-[-1rem]" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 84 22">
                <g filter="url(#filter0_f_479_11796_new)" opacity="0.73">
                  <ellipse cx="39" cy="11" fill="url(#paint0_linear_479_11796_new)" rx="2" ry="39"
                           transform="rotate(90 39 11)"></ellipse>
                </g>
                <g filter="url(#filter1_f_479_11796_new)">
                  <ellipse cx="68" cy="11" fill="url(#paint1_linear_479_11796_new)" rx="2" ry="10"
                           transform="rotate(90 68 11)"></ellipse>
                </g>
                <g filter="url(#filter2_f_479_11796_new)" opacity="0.21">
                  <ellipse cx="64" cy="11" fill="url(#paint2_linear_479_11796_new)" rx="5" ry="14"
                           transform="rotate(90 64 11)"></ellipse>
                </g>
                <g filter="url(#filter3_f_479_11796_new)">
                  <ellipse cx="72" cy="11" fill="url(#paint3_linear_479_11796_new)" rx="1" ry="6"
                           transform="rotate(90 72 11)"></ellipse>
                </g>
                <path stroke="url(#paint4_linear_479_11796_new)" strokeWidth="0.5" d="M22 10.75L78 10.75"></path>
                <defs>
                  <filter id="filter0_f_479_11796_new" width="90" height="16" x="-6" y="3"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter1_f_479_11796_new" width="24" height="8" x="56" y="7"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="1"></feGaussianBlur>
                  </filter>
                  <filter id="filter2_f_479_11796_new" width="40" height="22" x="44" y="0"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="3"></feGaussianBlur>
                  </filter>
                  <filter id="filter3_f_479_11796_new" width="20" height="10" x="62" y="6"
                          colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_479_11796" stdDeviation="2"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_479_11796_new" x1="39" x2="39" y1="-28" y2="50"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_479_11796_new" x1="68" x2="68" y1="1" y2="21"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="0.552" stopColor="#1DFCC7E0" stopOpacity="0.37"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_479_11796_new" x1="64" x2="64" y1="-3" y2="25"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint3_linear_479_11796_new" x1="72" x2="72" y1="5" y2="17"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint4_linear_479_11796_new" x1="76.353" x2="18.706" y1="11.5" y2="11.5"
                                  gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1DFCC7E0"></stop>
                    <stop offset="1" stopColor="#1DFCC7E0" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="swiper-bottom-units-wrapper">
          <div className="swiper-change-unit active">
            <div className="swiper-img-wrapper">
              <img src="/images/hoo-star-swiper-section/1.png" alt={`빛솔학원`}/>
            </div>
            <div className="swiper-text-wrapper">
              <div className="swiper-text-units">
                <p className="green-dotted-div">개별 맞춤 <br className='pc-only'/>입시 커리큘럼</p>
                <br/>
                <p className='green-dotted-div-description'>담당 교사와의 미팅을 통해 개인에 성적과 성향에 맞는 커리큘럼 진행<br
                  className='pc-only'/>10년이상의 경력과 성공 사례가 들어간 커리큘럼<br className='pc-only'/>디테일한 커리큘럼을 통해 하루 공부량 습득</p>
              </div>
            </div>
          </div>
          <div className="swiper-change-unit">
            <div className="swiper-img-wrapper">
              <img src="/images/hoo-star-swiper-section/2.png" alt={`빛솔학원`}/>
            </div>
            <div className="swiper-text-wrapper">
              <div className="swiper-text-units">
                <p className="green-dotted-div">밀착 관리</p>
                <br/>
                <p className='green-dotted-div-description'>담임 배정 후 공부와 태도와 습관에 대한 코칭<br/>담임의 점검과 치밀한 피드백을 받고 마무리
                  됩니다.<br/>교과목 교사의 지도 하에 정확한 공부법을 배웁니다.</p>
              </div>

            </div>
          </div>
          <div className="swiper-change-unit">
            <div className="swiper-img-wrapper">
              <img src="/images/hoo-star-swiper-section/3.png" alt={`빛솔학원`}/>
            </div>
            <div className="swiper-text-wrapper">
              <div className="swiper-text-units">
                <p className="green-dotted-div">선행 목표 <br className='pc-only'/>시스템</p>
                <br/>
                <p className='green-dotted-div-description'>목표 등급이나 목표 대학과 같은 후행 목표 보다 중요 한 것은 선행 목표입니다.<br
                  className='pc-only'/> 개인 공부 시간의 확보가 되는 선행 목표를 달성해야 학생의 자기 반성과 <br/> 피드백이 이루어 질수 있어 후행 목표 달성을 더욱 확실히할수
                  있습니다.</p>
              </div>

            </div>
          </div>
          <div className="swiper-change-unit">
            <div className="swiper-img-wrapper">
              <img src="/images/hoo-star-swiper-section/4.png" alt={`빛솔학원`}/>
            </div>
            <div className="swiper-text-wrapper">
              <div className="swiper-text-units">
                <p className="green-dotted-div"> 주의력 분산 <br className='pc-only'/>차단 시스템</p>
                <br/>
                <p className='green-dotted-div-description'>주의력을 극단적으로 최소화 시키는 몰입 환경을 <br
                  className='mobile-only'/> 만들었습니다. <br className='pc-only'/>공부와 수업, 휴식, 식사 등 학생의 필요에 가능성이 있는 모든
                  요소들이 <br className='pc-only'/> 한건물안에 있습니다.</p>
              </div>

            </div>
          </div>
          <div className="swiper-change-unit">
            <div className="swiper-img-wrapper">
              <img src="/images/hoo-star-swiper-section/5.jpg" alt={`빛솔학원`}/>
            </div>
            <div className="swiper-text-wrapper">
              <div className="swiper-text-units">
                <p className="green-dotted-div">낮잠 공간 <br className='pc-only'/>제공 및 통제</p>
                <br/>
                <p className='green-dotted-div-description'>남/ 여 분리 하여 최적의 낮잠 공간이 있습니다.기억력 향상과 피로 회복을 위한 25분 낮잠 공간
                  제공합니다.</p>
              </div>
            </div>
          </div>
          <div className="swiper-change-unit">
            <div className="swiper-img-wrapper">
              <img src="/images/hoo-star-swiper-section/6.jpg" alt={`빛솔학원`}/>
            </div>
            <div className="swiper-text-wrapper">
              <div className="swiper-text-units">
                <p className="green-dotted-div">양질의 식사, <br className='pc-only'/>운동 제공</p>
                <br/>
                <p className='green-dotted-div-description'>양질의 도시락 제공, 지하 식당 운영으로 분리된 공간에서 식사를 할수 있습니다.집중력과 기억력 향상을 위해
                  운동이 필요합니다.<br className='pc-only'/>제휴 피트니스 센터 또는 지정 코스에서 산책과 조깅 필수로 해야합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
