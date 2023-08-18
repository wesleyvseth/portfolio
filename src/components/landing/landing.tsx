import "./landing.css";
import Navigation from "../navigation/navigation";
import Portret from "../../assets/portret.png";
import Skills from "../skills/skills";

const Landing = () => {
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
            className="landing-image"
            src={Portret}
            alt="background"
          />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Landing;
