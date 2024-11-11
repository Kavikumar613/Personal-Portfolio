import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./toggle.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../context";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
      theme.dispatch({type :"TOGGLE"});
  };
  return (
    <div className="t">
      <FontAwesomeIcon icon={faSun} className="t-icon" />
      <FontAwesomeIcon icon={faMoon} className="t-icon" />
      <button className="t-button" onClick={handleClick} style={{left : theme.state.darkMode ? 0: 25}}></button>
    </div>
  );
};
export default Toggle;
