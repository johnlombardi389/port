import React from "react";
// Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Nav() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>Projects</li>
        <li>About</li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
