import "./skills.css";

const Skills = () => {
  const languageLogos = [
    "/react-logo.png",
    "/solidity-logo.png",
    "/firebase-logo.png",
    "/truffle-logo.png",
    "/nodejs-logo.png",
    "/typescript-logo.png",
    "/javascript-logo.png",
    "/html-logo.png",
    "/css-logo.png",
    "/sass-logo.png",
    "/angular-logo.png",
    "/jotai-logo.png",
    "/redux-logo.png",
  ];
  return (
    <div className="skills-wrap">
      {languageLogos.map((logo) => (
        <img
          key={logo}
          src={logo}
          alt="language logo"
        />
      ))}
    </div>
  );
};

export default Skills;
