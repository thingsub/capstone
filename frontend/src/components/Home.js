import React from "react";
import "../../src/styles.css";

const Home = () => (
  <div className="home-container">
    {/* 배경 비디오 추가 */}
    <video className="background-video" autoPlay loop muted>
      <source
        src={`${process.env.PUBLIC_URL}/videos/gameplay.mp4`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    {/* 콘텐츠 */}
    <div className="home-content" id="home-section">
      <h1 className="home-title">Welcome to the Game World!</h1>
    </div>
  </div>
);

export default Home;
