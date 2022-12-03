import React from "react";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Icons
import {
  SiReact,
  SiSass,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiGit,
  SiNodedotjs,
  SiVite,
  SiBootstrap,
  SiVisualstudiocode,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobexd,
} from "react-icons/si";
// Images
import codingImg from "../assets/codingImg.svg";

function About() {
  return (
    <div>
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
            adopted leveling up as a lifestyle and maintain a growth mindset
            with every challenge I face.
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

      <motion.div
        className="skills-section"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h1>Skills</h1>
        <div className="skills-list">
          <ul>
            <li>
              <SiReact />
              <span>React</span>
            </li>
            <li>
              <SiSass />
              <span>Sass</span>
            </li>
            <li>
              <SiJavascript />
              <span>JavaScript</span>
            </li>
            <li>
              <SiCss3 />
              <span>CSS</span>
            </li>
            <li>
              <SiHtml5 />
              <span>HTML</span>
            </li>
            <li>
              <SiGit />
              <span>Git</span>
            </li>
            <li>
              <SiNodedotjs />
              <span>Node.js</span>
            </li>
            <li>
              <SiVite />
              <span>Vite</span>
            </li>
            <li>
              <SiBootstrap />
              <span>Bootstrap</span>
            </li>
            <li>
              <SiVisualstudiocode />
              <span>VS Code</span>
            </li>
            <li>
              <SiFigma />
              <span>Figma</span>
            </li>
            <li>
              <SiAdobephotoshop />
              <span>Photoshop</span>
            </li>
            <li>
              <SiAdobeillustrator />
              <span>Illustrator</span>
            </li>
            <li>
              <SiAdobeindesign />
              <span>InDesign</span>
            </li>
            <li>
              <SiAdobexd />
              <span>XD</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
