import React from "react";
import { Link } from "react-router-dom";

function IntroSection() {
  return (
    <div className="intro-container">
      <div className="title">
        <div>
          <div className="hide">
            <h2>
              My name is <span>John Lombardi</span>.
            </h2>
          </div>
        </div>
      </div>

      <div className="title">
        <div>
          <div className="hide">
            <h2>
              I’m a design minded front-end web developer and lifelong learner.
            </h2>
          </div>
        </div>
      </div>

      <div className="title">
        <div>
          <div className="hide">
            <h2>
              I’m all about crafting accessible user experiences and impactful
              business solutions.
            </h2>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <Link to={"/projects"}>
          <button className="intro-btn">See My Work</button>
        </Link>
        <a href="mailto:johnlombardi389@gmail.com" className="intro-btn">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default IntroSection;
