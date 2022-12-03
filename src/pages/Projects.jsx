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
          <div className="card-desc">
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>SASS</li>
              <li>HTML</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="card-btns">
            <a
              href="https://johnlombardi389.github.io/music-player/"
              target="_blank"
              className="project-btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/johnlombardi389/music-player"
              target="_blank"
              className="project-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={pixelImg} alt="Pixel Sketch Project" />
        <div className="card-title">
          <h2>Pixel Sketch</h2>
          <div className="card-desc">
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="card-btns">
            <a
              href="https://johnlombardi389.github.io/pixel-sketch/"
              target="_blank"
              className="project-btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/johnlombardi389/pixel-sketch"
              target="_blank"
              className="project-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={layoutImg} alt="Layout Generator Project" />
        <div className="card-title">
          <h2>Layout Generator</h2>
          <div className="card-desc">
            <ul>
              <li>JavaScript</li>
              <li>SASS</li>
              <li>HTML</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="card-btns">
            <a
              href="https://johnlombardi389.github.io/layout-generator/"
              target="_blank"
              className="project-btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/johnlombardi389/layout-generator"
              target="_blank"
              className="project-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={rpsImg} alt="Rock, Paper, Scissors Project" />
        <div className="card-title">
          <h2>Rock, Paper, Scissors</h2>
          <div className="card-desc">
            <ul>
              <li>JavaScript</li>
              <li>SASS</li>
              <li>HTML</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="card-btns">
            <a
              href="https://johnlombardi389.github.io/rock-paper-scissors/"
              target="_blank"
              className="project-btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/johnlombardi389/rock-paper-scissors"
              target="_blank"
              className="project-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
