import "./landing.css";
import LineAnimations from "../line-animations/line-animations";
import Navigation from "../navigation/navigation";
import Portret from "../../assets/portret.png";

const Landing = () => {
  const codeString = `
    const developer = {
      name: "Wesley van Straalen",
      role: "Front-end Developer",
      location: "Amersfoort, The Netherlands",
      skills: ["HTML", "CSS", "JavaScript", "React", "..."],
      contact: {
        github: "https://github.com/wesleyvseth",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/wesleyvs_eth",
        email: "wesleyvanstr@outlook.com",
      }
    }`;

  return (
    <div className="landing">
      <Navigation />

      <div className="landing__wrapper">
        <div className="landing__content">
          <pre>
            <code>
              <span className="highlighted">{`const developer`} </span> {`=`} <span className="highlighted">{`{`}</span>
              <br />
              {'  name: "Wesley van Straalen",'}
              <br />
              {'  role: "Front-end Developer",'}
              <br />
              {'  location: "Amersfoort, The Netherlands",'}
              <br />
              {"  skills:"} <span className="highlighted">{"["}</span>
              <div className="skillset">
                <span className="skill"> {"   HTML"}</span>,<span className="skill"> "CSS"</span>,
                <span className="skill"> "Javascript"</span>,<span className="skill"> "React"</span>,
                <span className="skill"> "Angular"</span>
                <br />
                <span className="highlighted">{"  ],"}</span>
              </div>
              {"  contact:"} <span className="highlighted">{" {"}</span>
              <br />
              {"    github: "}
              <a
                href="https://github.com/wesleyvseth"
                target="_blank"
                rel="noopener noreferrer"
              >
                "wesleyvseth"
              </a>
              ,
              <br />
              {"    linkedin: "}
              <a
                href="https://linkedin.com/in/wesley-van-straalen-a1b174b8"
                target="_blank"
                rel="noopener noreferrer"
              >
                "wesley-van-straalen"
              </a>
              ,
              <br />
              {"    twitter: "}
              <a
                href="https://twitter.com/wesleyvs_eth"
                target="_blank"
                rel="noopener noreferrer"
              >
                "wesleyvs_eth"
              </a>
              ,
              <br />
              {'    email: "wesleyvanstr@outlook.com",'}
              <br />
              <span className="highlighted">{"  }"}</span>
              <br />
              <span className="highlighted">{"}"}</span>
            </code>
          </pre>
        </div>

        <div className="landing-background">
          <img
            src={Portret}
            alt="background"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
