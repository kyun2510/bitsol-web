import React, {useEffect, useRef, useState} from 'react';
import "./ty-back-section.css";

const TyBackSection = () => {

  const [mousePosition, setMousePosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        top: e.pageY,
        left: e.pageX,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="ty-back-section">
      <div
        className="ty-back-bg"
        style={{
          clipPath: `circle(300px at ${mousePosition.left}px ${mousePosition.top}px)`,
          maskImage: `radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)`,
          maskPosition: `${mousePosition.left - 300}px ${mousePosition.top - 300}px`,
          maskSize: `600px 600px`,
          WebkitMaskImage: `radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`,
          WebkitMaskPosition: `${mousePosition.left - 300}px ${mousePosition.top - 300}px`,
          WebkitMaskSize: `600px 600px`,
        }}
      >
      </div>
    </div>
  );
};

export default TyBackSection;
