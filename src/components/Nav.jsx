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
          <a
            href="https://www.linkedin.com/in/johnlombardi389/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/johnlombardi389" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
