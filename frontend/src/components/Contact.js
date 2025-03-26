import React from "react";
import "../../src/styles.css";

const Contact = () => (
  <div>
    <video className="background-video" autoPlay loop muted>
      <source
        src={`${process.env.PUBLIC_URL}/videos/gameplay.mp4`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="Box3" id="contact-section">
      {/* iframe 수정: frameBorder 제거 & allow 추가 */}
      <p>
        Thanks for visiting <br />
        Have a good day
      </p>

      <div className="infoBox">
        <a className="info" href="https://github.com/zuolab">
          <img width="70" height="70" src="./images/github.png" alt="GitHub" />
        </a>
        {/* 나머지 아이콘들 */}
      </div>
    </div>
  </div>
);

export default Contact;
