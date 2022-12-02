import React from "react";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Components
import IntroSection from "../components/IntroSection";

function Home() {
  return (
    <motion.div
      className="intro-section"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IntroSection />
    </motion.div>
  );
}

export default Home;
