import React from "react";
import "./navbar.scss";
export default function NavBar() {
  return (
    <nav className="navbar__container">
      <h2 className="navbar__title">
        <a href="#">Molina's Spline Hub</a>
      </h2>
      <ul>
        <li className="navbar__icons">
          <a href="" target="_blank"></a>
          <i class="bx bxl-github"></i>
        </li>
        <li className="navbar__icons">
          <a href="" target="_blank"></a>
          <i class="bx bxs-briefcase"></i>
        </li>
      </ul>
    </nav>
  );
}
