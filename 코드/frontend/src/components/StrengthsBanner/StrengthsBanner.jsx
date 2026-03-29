import React from 'react';
import './strengths-banner.css';

export default function StrengthsBanner() {
  const strengths = [
    {
      icon: '👤',
      title: '1:1 밀착형 케어 시스템',
      subtitle: 'Personalized Interaction',
      description: '전문 강사진과 1:1 소통으로 학습의 문턱을 낮추고 매일의 성취감을 경험하세요.'
    },
    {
      icon: '📚',
      title: '시즌별 다각화 학습 프로그램',
      subtitle: 'Versatile Curriculum',
      description: '내신부터 수능까지 공백 없는 완벽한 커리큘럼으로 흔들리지 않는 실전 감각을 유지합니다.'
    },
    {
      icon: '📊',
      title: '데이터 기반 자체 관리 솔루션',
      subtitle: 'Smart Monitoring',
      description: '학원 독자 개발 모니터링 프로그램으로 학습량과 몰입도를 정밀하게 관리합니다.'
    },
    {
      icon: '💬',
      title: '전방위적 성적 관리 및 맞춤 상담',
      subtitle: 'Total Feedback Loop',
      description: '정기 분석 리포트와 심층 맞춤 상담으로 목표 달성까지 완주를 지원합니다.'
    }
  ];

  return (
    <section className="strengths-banner-section">
      <div className="strengths-banner-container">
        <div className="strengths-banner-header">
          <h2>빛솔학원의 4가지 핵심 강점</h2>
          <p>여러분의 성적을 진짜 결과로 책임지는 학원입니다</p>
        </div>

        <div className="strengths-banner-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-banner-card glass-morphism">
              <div className="strength-banner-icon">{strength.icon}</div>
              <h3 className="strength-banner-title">{strength.title}</h3>
              <p className="strength-banner-subtitle">{strength.subtitle}</p>
              <p className="strength-banner-description">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
