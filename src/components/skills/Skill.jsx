import { faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import {
  backEndIcons,
  icons,
  noCodeAppIcons,
  otherAppIcons,
} from "../../assets/Skill_Icons/Icons";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context";

const Skill = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      if (isTyping) {
        setIsTyping(false);
      } else {
        setIsTyping(true);
      }
    }, 10000); // Set a timeout to reset typing status after 3 seconds of inactivity

    return () => clearInterval(typingTimer); // Cleanup the interval on unmount
  }, [isTyping]); // Re-run when isTyping changes

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100">
        <div className="text-center mb-5">
          <h1>SKILLS</h1>
        </div>

        <div className="row justify-content-center">
        <div className="skill-animation"></div>
          <div className="col-md-6 col-lg-4 mb-3">
            <div
              className="card"
              style={{
                height: "250px",
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "white" : "black",
              }}
            >
              <div className="card-body">
                <h5 className="frontend-title text-center">
                  Frontend Development
                </h5>
                <div className="d-flex flex-wrap justify-content-center">
                  {icons.map(({ name, component: IconComponent }, index) => (
                    <span
                      key={index}
                      className="btn border-1 border-secondary d-inline-flex align-items-center px-2 py-1 m-1"
                      style={{ color: darkMode ? "white" : "black" }}
                    >
                      <IconComponent className="icon" />
                      <span className="ms-1">{name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Cards with similar structure for Back-end, No-Code Apps, and Other Skills */}

          <div className="col-md-6 col-lg-4 mb-3">
            <div
              className="card"
              style={{
                height: "250px",
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "white" : "black",
              }}
            >
              <div className="card-body">
              <h5 class="backend-title text-center">
                  <span>B</span>
                  <span>a</span>
                  <span>c</span>
                  <span>k</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d</span>
                  <span>D</span>
                  <span>e</span>
                  <span>v</span>
                  <span>e</span>
                  <span>l</span>
                  <span>o</span>
                  <span>p</span>
                  <span>m</span>
                  <span>e</span>
                  <span>n</span>
                  <span>t</span>
                </h5>
                <div className="d-flex flex-wrap justify-content-center">
                  {backEndIcons.map(
                    ({ name, component: IconComponent }, index) => (
                      <span
                        key={index}
                        className="btn border-1 border-secondary d-inline-flex align-items-center px-2 py-1 m-1"
                        style={{ color: darkMode ? "white" : "black" }}
                      >
                        <IconComponent className="icon" />
                        <span className="ms-1">{name}</span>
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="skill-animation2"></div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div
              className="card"
              style={{
                height: "250px",
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "white" : "black",
              }}
            >
              <div className="card-body">
              <h5 className="other-title text-center">
                  <span
                    className={`${isTyping ? "typing" : "orgin-text"}`}
                  ></span>
                </h5>

                <div className="d-flex flex-wrap justify-content-center">
                  {noCodeAppIcons.map(
                    ({ name, component: IconComponent }, index) => (
                      <span
                        key={index}
                        className="btn border-1 border-secondary d-inline-flex align-items-center px-2 py-1 m-1"
                        style={{ color: darkMode ? "white" : "black" }}
                      >
                        <IconComponent className="icon" />
                        <span className="ms-1">{name}</span>
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Cards with similar structure for Back-end, No-Code Apps, and Other Skills */}

          <div className="col-md-6 col-lg-4 mb-3">
            <div
              className="card"
              style={{
                height: "250px",
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "white" : "black",
              }}
            >
              <div className="card-body">
              <h5 className="script-title text-center">
                  <span>O</span>
                  <span>t</span>
                  <span>h</span>
                  <span>e</span>
                  <span>r</span>
                  <span> </span>
                  <span>S</span>
                  <span>k</span>
                  <span>i</span>
                  <span>l</span>
                  <span>l</span>
                  <span>s</span>
                </h5>
                <div className="d-flex flex-wrap justify-content-center">
                  {otherAppIcons.map(
                    ({ name, component: IconComponent }, index) => (
                      <span
                        key={index}
                        className="btn border-1 border-secondary d-inline-flex align-items-center px-2 py-1 m-1"
                        style={{ color: darkMode ? "white" : "black" }}
                      >
                        <IconComponent className="icon" />
                        <span className="ms-1">{name}</span>
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
