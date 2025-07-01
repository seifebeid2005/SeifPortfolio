import React, { useState } from "react";
import "./Projects.css";
import Book from "../../assets/book.png"; // Adjust the path as necessary
import Grad from "../../assets/grad.png"; // Adjust the path as necessary
import Revo from "../../assets/revo.png"; // Adjust the path as necessary
const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      id: 1,
      title: "HSC Booking Court",
      description:
        "An online court booking system for Helliopolis Sporting Club.",
      image: Book,
      category: "Web Apps",
      link: "https://booking.hsceg.com/",
    },
    {
      id: 2,
      title: "Graduation Project",
      description:
        "A comprehensive graduation project showcasing advanced development skills.",
      image: Grad,
      category: "Web Apps",
      link: "https://tesorosdeegipto.web.app/",
    },
    {
      id: 3,
      title: "Revolution Of The Union",
      description:
        "A comprehensive website for university club with meeting scheduling, member management, event planning, and communication features.",
      image: Revo,
      category: "Web Apps",
      link: "https://revolution-of-the-union.web.app/",
    },
  ];

  const tabs = ["All", "Web Apps"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="tabs-container">
        <div className="tabs-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <p>{tab}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="project-info">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
