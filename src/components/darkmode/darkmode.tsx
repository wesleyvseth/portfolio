import "./darkmode.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../assets/animation.json";
import { useRef, useState } from "react";

const DarkMode = () => {
  const animationRef = useRef<LottieRefCurrentProps>(null);

  const mode = document.querySelector("body")?.getAttribute("data-theme");
  const [darkmode, setDarkmode] = useState(mode === "dark" ? "dark" : "light");

  const toggleDarkmode = () => {
    const isDarkmode = darkmode === "dark";
    if (isDarkmode) {
      animationRef.current?.setDirection(1);
      animationRef.current?.playSegments([0, 44], true);

      document.querySelector("body")?.setAttribute("data-theme", "light");
      setDarkmode("light");
    } else {
      animationRef.current?.setDirection(-1);
      animationRef.current?.playSegments([44, 0], true);

      document.querySelector("body")?.setAttribute("data-theme", "dark");
      setDarkmode("dark");
    }
  };

  return (
    <div className="darkmode">
      <Lottie
        className="darkmode__toggle"
        animationData={animationData}
        loop={false}
        lottieRef={animationRef}
        autoplay={false}
        onClick={() => {
          toggleDarkmode();
        }}
      />
    </div>
  );
};

export default DarkMode;
