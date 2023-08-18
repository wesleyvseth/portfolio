import React, { useState, useRef, useEffect } from "react";
import { Project } from "../projects";
import "../projects.css";

interface ProjectCardParams {
  project: Project;
  selected: boolean;
  onClick: (index: number) => void;
  index: number;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardParams> = ({ project, selected, onClick, index }) => {
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrollPos({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`project-wrap ${selected ? "project-selected" : "project-unselected"}`}
      onClick={() => {
        onClick(index);
      }}
      ref={cardRef}
    >
      <div
        className="project-bg"
        style={{ top: `-${scrollPos.y * 0.1}px` }}
      ></div>
      <div className="project-preview">
        <div className="project-info__header">{project.name}</div>
        <div className="project-icon">
          <img
            src={project.logo}
            alt="project icon"
          />
        </div>
      </div>
      <div className="project-info">
        <div className="project-info__image">
          <img
            className="project-image"
            src={project.imageUrl}
            alt="project"
          />
        </div>
        <div className="project-info__content">
          <div className="project-info__description">{project.description}</div>
          <div>
            <div className="project-info__stack">{project.technologies.join(", ")}</div>
            <div>
              <a href={project.url}> Website </a> / <a href={project.github}> Github </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
