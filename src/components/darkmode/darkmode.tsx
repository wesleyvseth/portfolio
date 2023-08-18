import "./darkmode.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../assets/animation.json";
import { useRef, useState, useEffect } from "react";

const DarkMode = () => {
  const animationRef = useRef<LottieRefCurrentProps>(null);

  const mode = document.querySelector("body")?.getAttribute("data-theme");
  const [darkmode, setDarkmode] = useState(mode === "dark" ? "dark" : "light");

  const toggleDarkmode = () => {
    const isDarkmode = darkmode === "dark";
    if (isDarkmode) {
      document.querySelector("body")?.setAttribute("data-theme", "light");
      setDarkmode("light");
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
      setDarkmode("dark");
    }
  };

  useEffect(() => {
    if (darkmode === "dark") {
      animationRef.current?.setDirection(-1);
      animationRef.current?.playSegments([44, 0], true);
    } else {
      animationRef.current?.setDirection(1);
      animationRef.current?.playSegments([0, 44], true);
    }
  }, [darkmode]);

  return (
    <div className="darkmode">
      <Lottie
        className="darkmode__toggle"
        animationData={animationData}
        loop={false}
        lottieRef={animationRef}
        autoplay={false}
        initialSegment={[0, 44]}
        onClick={() => {
          toggleDarkmode();
        }}
      />
    </div>
  );
};

export default DarkMode;
