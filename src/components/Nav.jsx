import React from "react";
// Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Nav() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
