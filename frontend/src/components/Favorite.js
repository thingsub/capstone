import React from "react";
import "../../src/styles.css";

const Favorite = () => (
  <div>
    <video className="background-video" autoPlay loop muted>
      <source
        src={`${process.env.PUBLIC_URL}/videos/gameplay.mp4`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    <div className="Box2" id="favorite-section">
      <div className="title">
        <h1>Source Of My Life</h1>
      </div>
      <div className="favor">
        <img width="350px" height="300px" src="./images/cat.jpg" alt="CAT" />
        <div className="cover">CAT</div>
        {/* 나머지 이미지 및 텍스트 */}
      </div>
    </div>
  </div>
);

export default Favorite;
