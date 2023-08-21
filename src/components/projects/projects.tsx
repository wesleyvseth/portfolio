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
  url?: string;
}

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);

  const projects: Project[] = [
    {
      name: "ctseer",
      description:
        "A ethereum based 1v1 betting platform predicting BTC prices. Users can login with their crypto wallet and place their bets.",
      technologies: [
        "/react-logo.png",
        "/jotai-logo.png",
        "/solidity-logo.png",
        "/firebase-logo.png",
        "/truffle-logo.png",
        "/nodejs-logo.png",
      ],
      github: "https://github.com/wesleyvseth/ctseer",
      imageUrl: "/ctseer.png",
      logo: "/ctseer-logo.png",
      previewImageUrl: "/ctseer-layer.png",
      url: "https://ctseer.com/",
    },
    {
      name: "JBook",
      description:
        "A practice project involving bundling and transpiling code. It's similiar to CodePen but with documenting and markdown support.",
      technologies: ["/react-logo.png", "/redux-logo.png", "/html-logo.png", "/sass-logo.png"],
      github: "https://github.com/wesleyvseth/code-editor",
      imageUrl: "/bettercx.png",
      logo: "/ctseer-logo.png",
      previewImageUrl: "/jbook-layer.png",
    },
    {
      name: "BetterCX",
      description: "A chrome extensions that allows twitter users to check crypto prices by hovering over a crypto ticker ($BTC).",
      technologies: ["/javascript-logo.png", "/html-logo.png", "/sass-logo.png"],
      github: "https://github.com/wesleyvseth/bettercx",
      imageUrl: "/jbook.png",
      logo: "/ctseer-logo.png",
      previewImageUrl: "/bettercx-layer.png",
    },
    {
      name: "Portfolio",
      description: "The website you're currently on! A simple portfolio project to showcase my resume and projects in a different way. ",
      technologies: ["/react-logo.png", "/html-logo.png", "/css-logo.png"],
      github: "https://github.com/wesleyvseth/portfolio",
      imageUrl: "/portfolio.png",
      logo: "/ctseer-logo.png",
      previewImageUrl: "/portfolio-layer.png",
    },
  ];

  const handleMouseClick = () => {
    const nextProjectIndex = selectedProjectIndex === projects.length - 1 ? 0 : selectedProjectIndex + 1;
    setSelectedProjectIndex(nextProjectIndex);
  };

  return (
    <>
      <h1 className="projects__header">Projects</h1>
      <h5 className="projects__subheader">Click the mouse to move through projects</h5>
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
          {projects.map((project, index) => (
            <div
              key={index}
              className={`projects__project ${index === selectedProjectIndex ? "projects__project-active" : ""}`}
            >
              <img
                className={`projects__images__layer projects__images__layer--active`}
                src={project.previewImageUrl}
                alt={project.previewImageUrl}
              />

              <div className="project__content">
                <div className="project__content__header">
                  <img
                    className="project__content__header__logo"
                    src={project.logo}
                    alt={project.logo}
                  />
                  <div className="project__content__header__name">{project.name}</div>
                </div>
                <div className="project__content__description">{project.description}</div>
                <div className="project__content__technologies">
                  {project.technologies.map((technology) => (
                    <img
                      key={technology}
                      src={technology}
                      className="project__content__technologies__technology"
                      alt="Tech logo"
                    />
                  ))}
                </div>

                <div className="project__content__links">
                  {!!project.url && (
                    <a
                      href={project.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      Website /{" "}
                    </a>
                  )}{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={project.github}
                  >
                    {" "}
                    Github{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
