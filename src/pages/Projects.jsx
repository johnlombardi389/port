import React from "react";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Images
import musicImg from "../assets/musicImg.png";
import pixelImg from "../assets/pixelImg.png";
import layoutImg from "../assets/layoutImg.png";
import rpsImg from "../assets/rpsImg.png";

function Projects() {
  return (
    <motion.div
      className="projects-grid"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="card">
        <img src={musicImg} alt="Music Player Project" />
        <div className="card-title">
          <h2>Music Player</h2>
          <div className="card-btns">
            <button className="project-btn">Demo</button>
            <button className="project-btn">GitHub</button>
          </div>
        </div>
        <div className="card-desc">
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>HTML</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <img src={pixelImg} alt="Pixel Sketch Project" />
        <div className="card-title">
          <h2>Pixel Sketch</h2>
          <div className="card-btns">
            <button className="project-btn">Demo</button>
            <button className="project-btn">GitHub</button>
          </div>
        </div>
        <div className="card-desc">
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <img src={layoutImg} alt="Layout Generator Project" />
        <div className="card-title">
          <h2>Layout Generator</h2>
          <div className="card-btns">
            <button className="project-btn">Demo</button>
            <button className="project-btn">GitHub</button>
          </div>
        </div>
        <div className="card-desc">
          <ul>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>HTML</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <img src={rpsImg} alt="Rock, Paper, Scissors Project" />
        <div className="card-title">
          <h2>Rock, Paper, Scissors</h2>
          <div className="card-btns">
            <button className="project-btn">Demo</button>
            <button className="project-btn">GitHub</button>
          </div>
        </div>
        <div className="card-desc">
          <ul>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>HTML</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
