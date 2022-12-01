import React from "react";

function IntroSection() {
  return (
    <div className="intro-container">
      <div className="title">
        <div>
          <div className="hide">
            <h2>My name is John Lombardi.</h2>
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
              business solutions.{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <button className="intro-btn">See My Work</button>
        <button className="intro-btn">Contact Me</button>
      </div>
    </div>
  );
}

export default IntroSection;
