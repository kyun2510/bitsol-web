import React from 'react';
import './about.css';

export default function About() {
  const strengths = [
    {
      icon: '👤',
      title: '1:1 밀착형 케어 시스템',
      subtitle: 'Personalized Interaction',
      description: '전문적인 강사진과 함께하는 실시간 호흡을 지향합니다. 각 과목별 전문 선생님들이 학생과 1:1로 소통하며 학습의 문턱을 낮춥니다. 매일 주어지는 개별 맞춤형 과제를 수행하고 피드백을 받는 과정을 통해 학생은 매일의 성취감을 경험하며, 이는 자연스러운 성적 상승으로 이어집니다.'
    },
    {
      icon: '📚',
      title: '시즌별 다각화 학습 프로그램',
      subtitle: 'Versatile Curriculum',
      description: '내신부터 수능까지 공백 없는 완벽한 커리큘럼을 제공합니다. 여름·겨울방학의 몰입형 특강은 물론, 학교별 출제 경향을 완벽히 분석한 내신 대비 특별 수업과 테마 강의가 진행됩니다. 변화하는 입시 환경에 맞춰 설계된 다양한 프로그램으로 흔들리지 않는 실전 감각을 유지합니다.'
    },
    {
      icon: '📊',
      title: '데이터 기반 자체 관리 솔루션',
      subtitle: 'Smart Monitoring',
      description: '최신 시설과 독자적 프로그램이 만난 스마트 학습 환경입니다. 학원에서 연구·개발한 독자적인 학습 모니터링 프로그램을 통해 학생의 학습량과 몰입도를 정밀하게 데이터화합니다. 쾌적한 최신 시설 내에서 사각지대 없는 꼼꼼한 밀착 관리를 실현합니다.'
    },
    {
      icon: '💬',
      title: '전방위적 성적 관리 및 맞춤 상담',
      subtitle: 'Total Feedback Loop',
      description: '정기적인 성적 분석 리포트를 통해 학생의 성장 궤적을 추적합니다. 분석된 데이터를 기반으로 원장님 및 담당 강사의 심층 맞춤 상담이 수시로 이루어지며, 학습 전략 수정부터 심리적 지지까지 제공하여 목표 달성까지 완주를 돕습니다.'
    }
  ];

  const branches = [
    {
      name: '감일종합관',
      description: '전과목 종합 프로그램으로 기초부터 심화까지 체계적 학습',
      features: ['초·중등부, 고등부 운영', '전 과목 전문 강사진', '맞춤형 소반 수업']
    },
    {
      name: '빛솔본점',
      description: '중점 관리 프로그램과 주요 교과 심화 중심의 특별 수업',
      features: ['고등부 특화 프로그램', '내신·수능 병행 전략', '강화 학습 공간']
    },
    {
      name: '독학재수관',
      description: '수능 대비 원정대와 재수생 전담 맞춤형 성적 관리',
      features: ['수능 특화 커리큘럼', '수시 학생 관리', '자습 지도 시스템']
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        {/* 헤더 섹션 */}
        <div className="about-header">
          <h1 className="about-title">빛솔학원</h1>
          <p className="about-subtitle">성적 관리 전문 학원, 여러분의 성적을 진짜 결과로 책임집니다</p>
        </div>

        {/* 학원 소개 섹션 */}
        <div className="about-intro-section">
          <div className="intro-content">
            <h2>우리는 성적으로 말합니다</h2>
            <p>
              빛솔학원은 학생 개개인의 성장을 최우선으로 두고 있습니다.
              데이터 기반의 체계적 관리와 전문 강사진의 밀착 지도를 통해,
              학생들이 자신의 꿈을 향해 한 걸음씩 나아갈 수 있도록 지원합니다.
            </p>
          </div>
        </div>

        {/* 4가지 핵심 강점 섹션 */}
        <div className="strengths-section">
          <h2 className="section-title">빛솔의 4가지 핵심 강점</h2>
          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <div key={index} className="strength-card glass-morphism">
                <div className="strength-icon">{strength.icon}</div>
                <h3 className="strength-title">{strength.title}</h3>
                <p className="strength-subtitle">{strength.subtitle}</p>
                <p className="strength-description">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 학원 지점 섹션 */}
        <div className="branches-section">
          <h2 className="section-title">학원 지점 안내</h2>
          <div className="branches-grid">
            {branches.map((branch, index) => (
              <div key={index} className="branch-card glass-morphism">
                <h3 className="branch-name">{branch.name}</h3>
                <p className="branch-description">{branch.description}</p>
                <ul className="branch-features">
                  {branch.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
