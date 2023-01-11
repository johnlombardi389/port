import React from "react";
import { Link } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
import { titleAnimation, btnSlide } from "../animation";

function IntroSection() {
  return (
    <div className="intro-container">
      <motion.div className="title" variants={titleAnimation}>
        <div className="reveal">
          <div className="hide">
            <h2>
              My name is <span>John Lombardi</span>.
            </h2>
          </div>
        </div>
      </motion.div>

      <motion.div className="title" variants={titleAnimation}>
        <div className="reveal">
          <div className="hide">
            <h2 className="sm-title">
              I’m a design minded front-end web developer and lifelong learner.
            </h2>
          </div>
        </div>
      </motion.div>

      {/* <motion.div className="title" variants={titleAnimation}>
        <div className="reveal">
          <div className="hide">
            <h2>
              I’m all about crafting accessible user experiences and impactful
              business solutions.
            </h2>
          </div>
        </div>
      </motion.div> */}

      <motion.div className="btn-container" variants={btnSlide}>
        <Link to={"/portfolio/projects"}>
          <button className="intro-btn">See My Work</button>
        </Link>
        <a href="mailto:johnlombardi389@gmail.com" className="intro-btn">
          Contact Me
        </a>
      </motion.div>
    </div>
  );
}

export default IntroSection;
