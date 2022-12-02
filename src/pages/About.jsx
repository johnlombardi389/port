import React from "react";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Images
import codingImg from "../assets/codingImg.svg";

function About() {
  return (
    <motion.div
      className="about-page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I grew up immersing myself in video game worlds where your character
          was always growing and learning new skills. Just like an RPG, I've
          adopted leveling up as a lifestyle and maintain a growth mindset with
          every challenge I face.
        </p>

        <p>
          My interest in front-end web development started back when I was
          working as a designer and decided to try building my own portfolio
          website. When I saw the endless learning opportunities in coding I
          became so excited and knew I wanted to work with computers and
          technology.
        </p>

        <p>
          I'm passionate about bringing design, technology, and learning
          together to craft accessible and impactful user experiences that can
          also solve business problems.
        </p>

        <p>
          Reach out to me at
          <a href="mailto:johnlombardi389@gmail.com">
            johnlombardi389@gmail.com
          </a>
          so we can build something great together.
        </p>
      </div>

      <div className="about-img">
        <img src={codingImg} alt="Portfolio Image" />
      </div>
    </motion.div>
  );
}

export default About;
