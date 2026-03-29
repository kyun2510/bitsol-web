import React, {useEffect} from 'react'
import "./hoo-contact-us-section-two.css"

const HooContactUsSectionTwo = () => {

  useEffect(() => {
    // 메인 버튼 hover 효과
    const hooContactBtn = document.querySelector('.hoo-contact-us-section-two .hoo-main-contact-btn')
    hooContactBtn.addEventListener("mouseenter", () => {
      hooContactBtn.classList.add("active");
    });
    hooContactBtn.addEventListener("mouseleave", () => {
      hooContactBtn.classList.remove("active");
    });

    hooContactBtn.addEventListener("touchstart", () => {
      hooContactBtn.classList.add("active");
    });

    hooContactBtn.addEventListener("touchend", () => {
      hooContactBtn.classList.remove("active");
    });
  }, [])

  return (
    <section className="hoo-contact-us-section-two">
      <p className="hoo-main-text">모집 안내<br/>
        “00반 , OO반 모집중 ”</p>
      <p className="hoo-mini-text">내신관리가 필요한 학생과 고등학교 1학년 혹은 중학생의 경우 문의 바랍니다.</p>
      <div className="hoo-contact-btn-wrap">
        <a className="contact-btn-a-link" href="/contact">
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
    </section>
  )
}

export default HooContactUsSectionTwo