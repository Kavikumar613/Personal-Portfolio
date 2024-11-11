import { useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../context";

const Education = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="education-sec">
      <div className="container">
        <main className="row">
          {/* Education Section Starts */}
          <section className="col">
            <header className="title" style={{color : darkMode ? "white":""}}>
              <h2>EDUCATION</h2>
            </header>
            <div className="contents ">
            <div className={`box p-4 mb-3 rounded ${!darkMode && "bg-white"} shadow-sm`} style={{backgroundColor:darkMode && "#333"}}>
                <h4 className="text-success"> Higher Secondary Education </h4>
                <h3 className={`fs-6 ${!darkMode && "text-muted"}`} style={{color:darkMode && "#ecf0f1 "}} >St Josheph's Hr Sec School Muthupettai</h3>
                <h5 className={`fs-6 ${darkMode ?"text-white":"text-muted"}`}>2018-2020</h5>
                <p className={`${!darkMode && "text-secondary"}`} style={{color:darkMode && "#ebedef "}}>
                  I completed my class 12 high school education at St Josheph's
                  Hr Sec School Muthupettai, where i studied with computer 
                  mathematics
                </p>
                <span>Grade : 57 %</span>
              </div>
              <div className={`box p-4 mb-3 rounded ${!darkMode && "bg-white"} shadow-sm`} style={{backgroundColor:darkMode && "#333"}}>
                <h4 className="text-success"> Bachelor of Computer Science </h4>
                <h3 className={`fs-6 ${!darkMode && "text-muted"}`} style={{color:darkMode && "#ecf0f1 "}} >Alagappa University</h3>
                <h5 className={`fs-6 ${darkMode ?"text-white":"text-muted"}`}>2020-2023</h5>
                <p className={`${!darkMode && "text-secondary"}`} style={{color:darkMode && "#ebedef "}}>
                  I pursued a Bachelor of Computer Science at Syed Ammal Arts
                  and Science college, graduated in 2023, and secured a CGPA of
                  6.78.
                </p>
                <span>Grade : 6.78 CGPA</span>
              </div>
            </div>
          </section>

          {/* Education section end */}

          {/* Experience section Start*/}
          <section className="col">
            <header className="title" style={{color : darkMode ? "white":""}}>
              <h2>EXPERIENCE</h2>
            </header>
            <div className="contents">
            <div className={`box p-4 mb-3 rounded ${!darkMode && "bg-white"} shadow-sm`} style={{backgroundColor:darkMode && "#333"}}>
              <h4 className="text-success">Junior Full-Stack Developer</h4>
              <h3 className={`fs-6 ${!darkMode && "text-muted"}`} style={{color:darkMode && "#ecf0f1 "}} >Forward 8 Sdn. Bhd</h3>
              <h5 className={`fs-6 ${darkMode ?"text-white":"text-muted"}`}>May 2024 - Nov 2024</h5>
              <p className={`${!darkMode && "text-secondary"}`} style={{color:darkMode && "#ebedef "}}>
                I worked on front-end development, web development, ReactJs, Firebase, SQL, Material UI, Google Apps Script, and Figma.
                </p>
                <ul className="list-inline d-flex gap-3 flex-wrap">
                  <li className="list-inline-item">HTML</li>
                  <li className="list-inline-item">CSS</li>
                  <li className="list-inline-item">JavaScript</li>
                  <li className="list-inline-item">ReactJs</li>
                  <li className="list-inline-item">Firebase</li>
                  <li className="list-inline-item">SQL</li>
                  <li className="list-inline-item">Material UI</li>
                  <li className="list-inline-item">Google Apps Script</li>
                  <li className="list-inline-item">Figma</li>
                </ul>
              </div>
            </div>
          </section>
          {/* Experience section end*/}
        </main>
      </div>
    </div>
  );
};

export default Education;

