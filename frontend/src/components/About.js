import React from "react";
import FetchData from "./FetchData"; // FetchData 컴포넌트 import
import "../../src/styles.css";

const About = () => (
  <div>
    <video className="background-video" autoPlay loop muted>
      <source
        src={`${process.env.PUBLIC_URL}/videos/gameplay.mp4`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    <div className="about-container" id="about-section">
      <div className="about-content">
        <h2 className="about-title">사용자 데이터 조회</h2>
        <FetchData />
      </div>
    </div>
  </div>
);

export default About;
