import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Favorite from "./components/Favorite";
import Contact from "./components/Contact";
import FetchData from "./components/FetchData";
import Login from "./components/Login";
import "../src/styles.css";
import { HashLink as LinkTo } from "react-router-hash-link"; // HashLink를 import

const ScrollToTop = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

const App = () => (
  <Router>
    <ScrollToTop />
    <nav className="Nav_bar">
      {/* 네비게이션에 HashLink 사용 */}
      <LinkTo to="#home-section">Home</LinkTo>
      <LinkTo to="#about-section">About</LinkTo>
      <LinkTo to="#favorite-section">Favorite</LinkTo>
      <LinkTo to="#contact-section">Contact</LinkTo>
      <LinkTo to="#login-section">Login</LinkTo>
    </nav>

    <Routes>
      {/* 페이지 컴포넌트는 경로에 맞게 렌더링 */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/fetch" element={<FetchData />} />
      <Route path="/login" element={<Login />} />
    </Routes>

    {/* 섹션 컴포넌트는 페이지 내에서 해시로 접근 가능하도록 */}

    <div id="about-section" className="section">
      <About />
    </div>
    <div id="favorite-section" className="section">
      <Favorite />
    </div>
    <div id="contact-section" className="section">
      <Contact />
    </div>
    <div id="login-section" className="section">
      <Login />
    </div>
  </Router>
);

export default App;
