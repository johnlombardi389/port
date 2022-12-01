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

      <button>See My Work</button>
    </div>
  );
}

export default IntroSection;
