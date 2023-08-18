import "./projects.css";
import { useState } from "react";
import mockup from "../../assets/test.png";
import mouse from "../../assets/magicmouse.png";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  logo: string;
  imageUrl: string;
  previewImageUrl: string;
  url: string;
}

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);

  const projects: Project[] = [
    {
      name: "ctseer",
      description:
        "A ethereum based 1v1 betting platform predicting BTC prices. Users can login with their crypto wallet and place their bets.",
      technologies: ["/react-logo.png", "/solidity-logo.png", "/firebase-logo.png", "/truffle-logo.png", "/nodejs-logo.png"],
      github: "ctseer.com",
      imageUrl: "/ctseer.png",
      logo: "/ctseer-logo.png",
      previewImageUrl: "/ctseer-layer.png",
      url: "ctseer.com",
    },
    {
      name: "JBook",
      description:
        "A practice project involving bundling and transpiling code. It's similiar to CodePen but with documenting and markdown support.",
      technologies: ["/react-logo.png", "/solidity-logo.png", "/firebase-logo.png", "/truffle-logo.png", "/nodejs-logo.png"],
      github: "Private, contact me for more information.",
      imageUrl: "/bettercx.png",
      logo: "/ctseer-logo.png",
      previewImageUrl: "/jbook-layer.png",
      url: "ctseer.com",
    },
    {
      name: "BetterCX",
      description: "A chrome extensions that allows twitter users to check crypto prices by hovering over a crypto ticker ($BTC).",
      technologies: ["/react-logo.png", "/solidity-logo.png", "/firebase-logo.png", "/truffle-logo.png", "/nodejs-logo.png"],
      github: "Private, contact me for more information.",
      imageUrl: "/jbook.png",
      logo: "/ctseer-logo.png",
      previewImageUrl: "/bettercx-layer.png",
      url: "ctseer.com",
    },
    {
      name: "Portfolio",
      description: "The website you're currently on! A simple portfolio project to showcase my resume and projects in a different way. ",
      technologies: ["/react-logo.png", "/solidity-logo.png", "/firebase-logo.png", "/truffle-logo.png", "/nodejs-logo.png"],
      github: "Private, contact me for more information.",
      imageUrl: "/portfolio.png",
      logo: "/ctseer-logo.png",
      previewImageUrl: "/portfolio-layer.png",
      url: "ctseer.com",
    },
  ];

  const handleMouseClick = () => {
    const nextProjectIndex = selectedProjectIndex === projects.length - 1 ? 0 : selectedProjectIndex + 1;
    setSelectedProjectIndex(nextProjectIndex);
  };

  const selectedProject = projects[selectedProjectIndex];

  return (
    <>
      <h1 className="projects__header">Projects</h1>
      <h5 className="projects__subheader">Click to mouse to move through projects</h5>
      <div className="projects">
        <div className="projects__mockup--container">
          <img
            src={mockup}
            alt="test"
            className="projects__mockup"
          />
          <div
            onClick={handleMouseClick}
            className="projects__mouse-container"
          >
            <div className="pulsating-circle"></div>
            <img
              src={mouse}
              alt="test"
              className="projects__mouse"
            />
          </div>
        </div>

        <div>
          <div className="projects__project">
            <img
              className={`projects__images__layer projects__images__layer--active`}
              src={selectedProject.previewImageUrl}
              alt="test"
            />

            <div className="project__content">
              <div className="project__content__header">
                <img
                  className="project__content__header__logo"
                  src={selectedProject.logo}
                  alt="test"
                />
                <div className="project__content__header__name">{selectedProject.name}</div>
              </div>
              <div className="project__content__description">{selectedProject.description}</div>
              <div className="project__content__technologies">
                {selectedProject.technologies.map((technology) => (
                  <img
                    src={technology}
                    className="project__content__technologies__technology"
                    alt="Tech logo"
                  />
                ))}
              </div>

              <div className="project__content__links">
                <a href={selectedProject.url}> Website </a> / <a href={selectedProject.github}> Github </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
