import React from "react";
import "../../src/styles.css";

const Login = () => {
  return (
    <div>
      <video className="background-video" autoPlay loop muted>
        <source
          src={`${process.env.PUBLIC_URL}/videos/gameplay.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="login-container">
        <h2>소셜 로그인</h2>
        <button className="social-login kakao">
          <img src="/images/kakao.png" alt="Kakao Logo" />
          카카오 로그인
        </button>
        <button className="social-login google">
          <img src="/images/google.png" alt="Google Logo" />
          구글 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
