import React from "react";

function Header() {
  return (
    <header>
      <h1>STEFAN BALAZ</h1>
      <h2>Software Developer</h2>
      <ul className="icons_ul">
        <li className="icons_li">
          <a
            href="https://www.linkedin.com/in/stefanbalaz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>

        <li className="icons_li">
          <a
            href="https://github.com/stefanbalaz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github icon"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
