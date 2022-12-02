import React from "react";
import { NavLink } from "react-router-dom";
// Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
// Image
import portLogo from "/portLogo.svg";

function Nav() {
  return (
    <nav>
      <h1>
        <NavLink id="logo" to={"/"}>
          <img src={portLogo} alt="John Lombardi Logo" />
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
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
