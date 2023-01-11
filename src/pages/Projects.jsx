import React from "react";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Images
import musicImg from "../assets/musicImg.png";
import pixelGridImg from "../assets/pixelGridImg.png";
import layoutGenImg from "../assets/layoutGenImg.png";
import gtImg from "../assets/gtImg.png";
import portfolioImg from "../assets/portfolioImg.png";

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
        <img src={gtImg} alt="Music Player Project" />
        <div className="card-title">
          <h2>Game Website</h2>
          <div className="card-desc">
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>Sass</li>
              <li>REST API</li>
            </ul>
          </div>
          <div className="card-btns">
            <a
              href="https://johnlombardi389.github.io/game-tracker/"
              target="_blank"
              className="project-btn"
            >
              Demo
            </a>
            <a
              href="https://github.com/johnlombardi389/game-tracker"
              target="_blank"
              className="project-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={musicImg} alt="Music Player Project" />
        <div className="card-title">
          <h2>Music Player</h2>
          <div className="card-desc">
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Sass</li>
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
        <img src={pixelGridImg} alt="Pixel Sketch Project" />
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
        <img src={layoutGenImg} alt="Layout Generator Project" />
        <div className="card-title">
          <h2>Layout Generator</h2>
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
        <img src={portfolioImg} alt="Layout Generator Project" />
        <div className="card-title">
          <h2>React Portfolio</h2>
          <div className="card-desc">
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Sass</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="card-btns">
            <button className="inactive-btn">Demo</button>
            <a
              href="https://github.com/johnlombardi389/portfolio"
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
