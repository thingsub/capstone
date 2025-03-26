import React from "react";
import { HashLink } from "react-router-hash-link"; // HashLink 임포트

// 각 섹션으로 이동하는 링크를 배열로 관리
const sections = [
  { name: "Home", id: "home-section" },
  { name: "About", id: "about-section" },
  { name: "Favorite", id: "favorite-section" },
  { name: "Contact", id: "contact-section" },
];

const NavBar = () => (
  <div className="Nav_bar">
    {sections.map((section) => (
      <HashLink key={section.id} to={`/#${section.id}`}>
        {section.name}
      </HashLink>
    ))}
    <HashLink to="/login">Login</HashLink>
  </div>
);

export default NavBar;
