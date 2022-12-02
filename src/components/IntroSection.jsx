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
              I’m all about
              <span>
                crafting accessible user experiences and impactful business
                solutions
              </span>
              .
            </h2>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <Link to={"/projects"}>
          <button className="intro-btn">See My Work</button>
        </Link>
        <button className="intro-btn">Contact Me</button>
      </div>
    </div>
  );
}

export default IntroSection;
