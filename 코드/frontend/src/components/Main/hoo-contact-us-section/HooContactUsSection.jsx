import React, {useEffect} from "react";
import "./hoo-contact-us-section.css";

const HooContactUsSection = () => {

  useEffect(() => {
    // 메인 버튼 hover 효과
    const hooContactBtn = document.querySelector(".hoo-contact-us-section .hoo-main-contact-btn");
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
  }, []);

  return (
    <section className="hoo-contact-us-section">
      <p className="hoo-main-text">
        고2때 전교 최하위권 학생 <br/> 수능에서1.7등급 받은 실제사례
      </p>
      <p className="hoo-mini-text">쉽게 따라할 수 없는 빛솔학원의 실력을 확인하세요.</p>
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
  );
};

export default HooContactUsSection;
