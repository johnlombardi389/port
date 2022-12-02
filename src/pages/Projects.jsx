import React from "react";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

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
        <h2>Project</h2>
      </div>

      <div className="card">
        <h2>Project</h2>
      </div>

      <div className="card">
        <h2>Project</h2>
      </div>

      <div className="card">
        <h2>Project</h2>
      </div>
    </motion.div>
  );
}

export default Projects;
