import React, {useEffect} from 'react'
import "./hoo-main-top-section.css";

const HooMainTopSection = () => {

  useEffect(() => {
    // 메인 버튼 hover 효과
    const hooMainBtn = document.querySelector('.hoo-main-top-section .hoo-main-contact-btn')
    hooMainBtn.addEventListener("mouseenter", () => {
      hooMainBtn.classList.add('active')
    })
    hooMainBtn.addEventListener('mouseleave', () => {
      hooMainBtn.classList.remove('active')
    })

    // 글자 1개씩 fade in .
    document.addEventListener("DOMContentLoaded", function () {
      const texts = document.querySelectorAll('.hoo-main-big-text');
      const delayIncrement = 0.8 / texts[0].children.length; // 전체 시간을 span 개수로 나눔

      texts.forEach((text, index) => {
        for (let i = 0; i < text.children.length; i++) {
          text.children[i].style.animationDelay = `${index * 0.8 + i * delayIncrement}s`;
        }
      });
    });
  }, [])

  return (
    <section className="hoo-main-top-section">
      <div className="hoo-main-wrapper">
        <div className="hoo-main-front-wrapper">
          <p className="hoo-main-mini-text">성적 관리 전문 학원</p>
          <div className="hoo-main-big-text-wrapper">
            <p className="hoo-main-big-text">
              <span>빛</span>
              <span>솔</span>
              <span>학</span>
              <span>원</span>
              <span>은</span>
              <span> </span>
              <span>여</span>
              <span>러</span>
              <span>분</span>
              <span>의</span>
              <span> </span>
              <span>성</span>
              <span>적</span>
              <span>을</span>
              <span> </span>
            </p>
            <p className="hoo-main-big-text">
              <span>진</span>
              <span>짜</span>
              <span> </span>
              <span>결</span>
              <span>과</span>
              <span>로</span>
              <span> </span>
              <span>책</span>
              <span>임</span>
              <span>집</span>
              <span>니</span>
              <span>다</span>
              <span>.</span>
              <span></span>
              <span></span>
            </p>
          </div>
          <a className="contact-btn-a-link pc-only" href="/contact">
            <div className="hoo-main-contact-btn">
              <div className="hoo-main-btn-white-text">
                <div className="text-hidden-box first">
                  <p className="contact-us-text">CONTACT</p>
                </div>
              </div>
              <div className="hoo-main-btn-white-text">
                <div className="text-hidden-box second">
                  <p className="contact-us-text">CONTACT</p>
                </div>
              </div>
              <div className="hoo-main-btn-bg-wrap">
                <div className="hoo-main-btn-bg white"></div>
                <div className="hoo-main-btn-bg green"></div>
              </div>
            </div>
          </a>
        </div>
        <div className="hoo-main-video-wrapper">
          <img src="/images/hoo-main-top-section/small-img.png" className='pc-only' alt="small-img"/>
        </div>
        <div className="hoo-main-bg-wrapper">
          <div className='hoo-main-bg-imgwrap'>
            <img src="/images/hoo-main-top-section/main-toptop.png" alt={`image`} className='pc-only'/>
            <img src="/images/hoo-main-top-section/mobile-back-1.png" alt={`image`} className='mobile-only'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HooMainTopSection

