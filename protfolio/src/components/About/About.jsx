import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "TypeScript",
    "HTML5",
    "CSS",
    "Python",
    "RESTful APIs",
    "firebase",
    "java",
    "servlets",
    "MySQL",
    "PHP",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-profile">
          <div className="profile-image"></div>
          <div className="profile-info">
            <p className="profile-name">Seif Ebeid</p>
            <p className="profile-title">Full-Stack Developer</p>
            <p className="profile-description">
              I'm a passionate full-stack developer with a strong foundation in
              both front-end and back-end technologies. I enjoy building
              scalable and efficient web applications that solve real-world
              problems. My expertise includes JavaScript, React, Node.js,
              Firebase, and databases like MySQL. I'm always
              eager to learn new technologies and collaborate on exciting
              projects.
            </p>
          </div>
        </div>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
