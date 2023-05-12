import React from "react";

const Info: React.FC = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="fa fa-trophy about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">0-1 Years Working</span>
      </div>
      <div className="about__box">
        <i className="fa fa-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </div>
      <div className="about__box">
        <i className="fa fa-headphones about__icon"></i>
        <h3 className="about__title">Interested In</h3>
        <span className="about__subtitle">SWE, PM & Consulting Opportunites</span>
      </div>
    </div>
  );
};

export default Info;
