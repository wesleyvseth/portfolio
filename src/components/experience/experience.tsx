import "./experience.css";
import React, { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  logo: string;
  url: string;
}

const Experience = () => {
  const [inViewItems, setInViewItems] = useState<number[]>([]);
  const listItemsRefs = useRef<(HTMLLIElement | null)[]>([]);

  const experiences: ExperienceItem[] = [
    {
      company: "Ilionx",
      position: "Software Engineer",
      startDate: "01-2023",
      endDate: "Present",
      description:
        "At Ilionx I get to work for multiple different Companies. Find some of these companies in this experience list. While not having a project I get to work on my own skills and knowledge. This includes learning new technologies, creating a new project and doing courses.",
      technologies: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "SCSS"],
      logo: "/logo-ilionx.png",
      url: "https://www.ilionx.com/",
    },
    {
      company: "De Nieuwe Zaak",
      position: "Software Engineer",
      startDate: "03-2023",
      endDate: "07-2023",
      description:
        "At De Nieuwe Zaak I mainly worked on e-commerce webshops. They worked with BigCommerce and made custom themes for their clients. This included mini React applications and javascript.",
      technologies: ["React", "Redux", "HTML5", "JQuery", "HTML", "SCSS"],
      logo: "/logo-dnz.png",
      url: "https://www.denieuwezaak.nl/",
    },
    {
      company: "Rentman",
      position: "Software Engineer",
      startDate: "09-2020",
      endDate: "12-2022",
      description:
        "At Rentman I've worked on multiple functionalities within a stand-alone SCRUM team. This includes development of new features, refactoring of old code from AngularJS to Angular 14, reviewing team members code, analyzing and fixing bugs and guide interns.",
      technologies: ["Angular14", "AngularJS", "TypeScript", "HTML5", "SCSS"],
      logo: "/rentman-logo.svg",
      url: "https://rentman.io/",
    },
    {
      company: "Trueson",
      position: "Intern Software Engineer",
      startDate: "08-2019",
      endDate: "02-2020",
      description:
        "This was an internship where we've worked on a app related to the pharma industry. It was focussed on iPad development with VueJS. Mainly worked on refactoring some frontend code.",
      technologies: ["VueJS", "HTML5", "CSS"],
      logo: "/logo-trueson.png",
      url: "https://trueson.com/",
    },
    {
      company: "Oxygen Digital",
      position: "Intern Software Engineer",
      startDate: "09-2016",
      endDate: "03-2017",
      description:
        "The internship at Oxygen Digital allowed me to use some creativity to come up with solutions for their clients. I've worked on multiple projects and used multiple technologies. They also allowed me to make up features myself and then develop them.",
      technologies: ["VueJS", "JQuery", "NodeJS", "MongoDB", "HTML", "CSS"],
      logo: "logo-oxygen.png",
      url: "https://oxygendigital.nl/",
    },
  ];

  const handleScroll = () => {
    const inView: number[] = [];

    listItemsRefs.current.forEach((li, index) => {
      if (li) {
        const rect = li.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          inView.push(index);
        }
      }
    });

    setInViewItems(inView);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="experience-wrap">
      <h1>Experience</h1>
      <ul>
        {experiences.map((experience, index) => {
          return (
            <li
              key={index}
              ref={(el) => (listItemsRefs.current[index] = el)}
              className={`experience-item ${inViewItems.includes(index) ? "in-view" : ""}`}
            >
              <div className="date">
                {experience.startDate} / {experience.endDate}
              </div>
              <div className="title">
                <img
                  src={experience.logo}
                  alt={experience.company}
                />
                {experience.company}
              </div>
              <div className="descr">{experience.description}</div>
              <div className="tech">
                {experience.technologies.map((tech, index) => {
                  return <span key={index}>{tech} </span>;
                })}
              </div>
              <div className="url">
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {experience.url}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
