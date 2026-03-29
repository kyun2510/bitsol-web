import React, { useEffect, useRef, useState } from 'react';
import './third-contact-section.css'
import api from '../../../api/axios';
import StrengthsBanner from '../../StrengthsBanner/StrengthsBanner.jsx';

export default function ThirdContactSection(props) {
  const {
    windowWidth
  } = props;

  const buttonText1Ref = useRef([]);
  const buttonText2Ref = useRef([]);
  const [buttonText, setButtonText] = useState('문의하기')
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  // 문의
  const [formData, setFormData] = useState({
    qc_name: '',
    qc_phone: '',
    qc_field: '',
    qc_location: '',
    qc_content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.qc_name) {
      alert("성함을 입력하세요.");
      return;
    }
    if (!formData.qc_phone) {
      alert("연락처를 입력하세요.");
      return;
    }
    if (!formData.qc_field) {
      alert("학년을 입력하세요.");
      return;
    }
    if (!formData.qc_location) {
      alert("지점을 선택하세요.");
      return;
    }

    try {
      const response = await api.post('/quickcontact/post', formData);

      alert("성공적으로 문의 남겼습니다.");

      setFormData({
        qc_name: '',
        qc_phone: '',
        qc_field: '',
        qc_location: '',
        qc_content: '',
      });
    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };

  return (
    <>
    <section className="third-contact-section">
      <div className={`third-contact-container`}>
        <div className={`third-contact-inner`}>
          <p className={`third-contact-title`}>
            지금 빛솔학원에서 당신의 <br className={"mobile-only"}/>꿈을 이루세요
          </p>
          <p className={`third-contact-sub-title`}>
          빛솔학원에서의 최대 지원을 받으며<br className={"mobile-only"}/>  초단기 성장을 경험하세요.<br />
           여러분도 가능하다는 것을 증명하겠습니다!
          </p>
          <div className={`contact-box`}>
            <form onSubmit={handleSubmit} className={`contact-form-box`}>
              <div className={`input-cover`}>
                <select
                  name="qc_location"
                  value={formData.qc_location}
                  onChange={handleChange}
                  className={`contact-select`}
                >
                  <option value="">문의 지점 선택</option>
                  <option value="main">빛솔본점</option>
                  <option value="self-study">독학재수관</option>
                  <option value="gamil">감일종합반</option>
                </select>
              </div>
              <div className={`input-cover`}>
                <input
                  type="text"
                  id="qc_name"
                  name="qc_name"
                  className={``}
                  value={formData.qc_name}
                  onChange={handleChange}
                  placeholder="이름"
                />
              </div>
              <div className={`input-cover`}>
                <input
                  type="text"
                  id="qc_phone"
                  name="qc_phone"
                  className={``}
                  value={formData.qc_phone}
                  onChange={handleChange}
                  placeholder="연락처"
                />
              </div>
              <div className={`input-cover`}>
                <input
                  type="text"
                  id="qc_field"
                  name="qc_field"
                  className={``}
                  value={formData.qc_field}
                  onChange={handleChange}
                  placeholder="학년(나이)"
                />
              </div>
              <div className={`input-cover`}>
                  <textarea
                    id="qc_content"
                    name="qc_content"
                    className={``}
                    value={formData.qc_content}
                    onChange={handleChange}
                    placeholder={"문의 내용 (ex. 국어가 많이 부족합니다, 전반적인 상담을 원합니다.)"}
                    rows={4}
                    style={{ resize: 'vertical' }}
                  />
              </div>
              <button type="submit" className={`third-contact-contact`}>
                <div className={`third-contact-button-circle`}>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
                <div className={`third-contact-button-inner`}>
                  {Array.from(buttonText).map((letter, index) => (
                    <span
                      key={index}
                      ref={el => buttonText1Ref.current[index] = el}
                      className="third-contact-button-span"
                      style={{ transitionDelay: `${index * 0.0125}s` }}
                    >
                      {letter !== ' ' ? letter : '\u00A0'}
                    </span>
                  ))}
                </div>
                <div className={`third-contact-button-cover`}>
                  {Array.from(buttonText).map((letter, index) => (
                    <span
                      key={index}
                      ref={el => buttonText2Ref.current[index] = el}
                      className="third-contact-button-cover-span"
                      style={{ transitionDelay: `${index * 0.0125}s` }}
                    >
                      {letter !== ' ' ? letter : '\u00A0'}
                    </span>
                  ))}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* StrengthsBanner removed to keep contact page focused */}
    </>
  )
}