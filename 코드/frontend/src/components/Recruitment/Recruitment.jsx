import React from 'react';
import './recruitment.css';
import StrengthsBanner from '../StrengthsBanner/StrengthsBanner.jsx';

export default function Recruitment() {
  const recruitmentInfo = {
    title: '빛솔학원 모집 중',
    subtitle: '함께할 새로운 학생들을 기다리고 있습니다',
    branches: [
      {
        name: '감일종합관',
        address: '경기도 하남시 감일로102번길 21, 1층',
        description: '전과목 종합 프로그램으로 기초부터 심화까지 체계적 학습',
        features: ['초·중등부, 고등부 운영', '전 과목 전문 강사진', '1:1 상호작용식 수업'],
        contact: '0507-1393-2008'
      },
      {
        name: '빛솔본점',
        address: '서울시 강동구 고덕로89, 3층',
        description: '중점 관리 프로그램과 주요 교과 심화 중심의 특별 수업',
        features: ['고등부 특화 프로그램', '내신·수능 병행 전략', '강화 학습 공간'],
        contact: '0507-1399-0573'
      },
      {
        name: '독학재수관',
        address: '서울시 강동구 명일동 305-23번지, 3층',
        description: '수능 대비 원정대와 재수생 전담 맞춤형 성적 관리',
        features: ['수능 특화 커리큘럼', '수시 학생 관리', '자습 지도 시스템'],
        contact: '0507-1435-9403'
      }
    ]
  };

  return (
    <section className="recruitment-section">
      <div className="recruitment-container">
        {/* 헤더 섹션 */}
        <div className="recruitment-header">
          <h1 className="recruitment-title">{recruitmentInfo.title}</h1>
          <p className="recruitment-subtitle">{recruitmentInfo.subtitle}</p>
        </div>

        {/* 모집 안내 소개 섹션 */}
        <div className="recruitment-intro-section">
          <div className="intro-content">
            <h2>우리와 함께 성적을 올리세요</h2>
            <p>
              빛솔학원은 학생 여러분의 성장을 최우선으로 합니다.
              1:1 밀착형 케어, 데이터 기반의 체계적 관리, 전문 강사진의 지도를 통해
              여러분의 꿈을 현실로 만들어드립니다.
              지금 바로 빛솔학원과 함께 성공의 길에 나서세요.
            </p>
          </div>
        </div>

        {/* 지점 안내 섹션 */}
        <div className="recruitment-branches-section">
          <h2 className="section-title">지점 안내</h2>
          <p className="section-subtitle">당신 가까이에 있는 빛솔학원</p>
          <div className="branches-grid">
            {recruitmentInfo.branches.map((branch, index) => (
              <div key={index} className="branch-card">
                <div className="branch-header">
                  <h3>{branch.name}</h3>
                  <p className="branch-address">{branch.address}</p>
                </div>
                <div className="branch-body">
                  <p className="branch-description">{branch.description}</p>
                  <ul className="branch-features">
                    {branch.features.map((feature, i) => (
                      <li key={i}>✓ {feature}</li>
                    ))}
                  </ul>
                  <p className="branch-contact">
                    <span className="contact-label">연락처:</span> {branch.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4가지 강점 배너 */}
        <StrengthsBanner />
      </div>
    </section>
  );
}
