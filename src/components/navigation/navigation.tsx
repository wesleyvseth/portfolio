import "./navigation.css";
import DarkMode from "../darkmode/darkmode";

const Navigation = () => {
  return (
    <div className="navigation">
      <span className="wvs">wvs</span>

      <div className="navigation__items">
        <div className="navigation__darkmode">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
