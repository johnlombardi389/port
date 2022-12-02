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
        <h2>Project</h2>
      </div>

      <div className="card">
        <img src={pixelImg} alt="Pixel Sketch Project" />
        <h2>Project</h2>
      </div>

      <div className="card">
        <img src={layoutImg} alt="Layout Generator Project" />
        <h2>Project</h2>
      </div>

      <div className="card">
        <img src={rpsImg} alt="Rock, Paper, Scissors Project" />
        <h2>Project</h2>
      </div>
    </motion.div>
  );
}

export default Projects;
