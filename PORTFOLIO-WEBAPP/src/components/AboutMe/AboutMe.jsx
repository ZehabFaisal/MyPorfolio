import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2 style={{fontSize: "35px"}}> ABOUT ME </h2>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3> Summary </h3>

          <p>
            I am <strong>Zehab Faisal</strong>, {" "}
            <strong>MERN Stack Developer</strong> passionate about building
            modern, responsive, and accessible web applications. I specialize
            in <strong>React.js</strong> and{" "}
            <strong>Tailwind CSS</strong>, transforming ideas into engaging
            digital experiences.
          </p>

          <h3> Goals </h3>

          <p>
            I am continuously improving my frontend development skills while
            exploring backend technologies. My goal is to build products that
            solve real-world problems and contribute to open-source projects.
          </p>

          <h3> Looking For </h3>
          <p> Seeking a MERN Stack Internship where I can contribute, learn from experienced developers, 
              and grow professionally. </p>
        </div>

        <div className="about-card">
          <h3> Skills </h3>

          <div className="skill-category">
            <h4> Languages </h4>
            <div className="skills">
              <span> C </span>
              <span> C++ </span>
              <span> HTML5 </span>
              <span> CSS3 </span>
              <span> JavaScript </span>

            </div>
          </div>

          <div className="skill-category">
            <h4> Frameworks </h4>
            <div className="skills">
              <span> React.js </span>
              <span> Tailwind CSS </span>
            </div>
          </div>

          <div className="skill-category">
            <h4> Database </h4>
            <div className="skills">
              <span> MongoDB </span>
              <span> MySQL </span>
            </div>
          </div>

          <div className="skill-category">
            <h4> Tools </h4>
            <div className="skills">
              <span> GitHub </span>
              <span> Visual Studio Code </span>
              <span> Postman API </span>
              <span> Vercel </span>
              <span> Thunder Client </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;