import React from "react";

function IntroSection() {
  return (
    <div className="intro-container">
      <div className="title">
        <div className="hide">
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
      </div>

      <div className="title">
        <div className="hide">
          <h2>
            Lorem ipsum dolor <span>sit amet.</span>
          </h2>
        </div>
      </div>

      <div className="title">
        <div className="hide">
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
      </div>

      <button>See My Work</button>
    </div>
  );
}

export default IntroSection;
