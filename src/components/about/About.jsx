import "./about.css";
import test from "../../assets/About.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const handleDownload = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "/Kavi Kumar 6Month Experience.pdf"; // Path to your resume file in public folder
    link.download = "Kavi Kumar 6Month Experience.pdf"; // Name of the downloaded file
    link.click();
  };
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img className="about-img" src={test} alt="" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">ABOUT ME</h1>
        <p className="about-sub">Let’s Build Something Amazing</p>
        <p className="about-desc">
          I’m a Junior Full-Stack Developer with a Bachelor’s in Computer
          Science and practical experience in ReactJS, Firebase, and Google Apps
          Script. Over the past six months, I’ve worked on projects like a Label
          and Filter Management tool and a real-time Chat App, where I developed
          my skills in building scalable, user-friendly web applications.
          Passionate about creating intuitive designs and writing clean,
          efficient code, I’m always eager to learn new technologies and
          contribute to collaborative projects that deliver real value.
        </p>
        <div className="about-resume-down">
          <button onClick={handleDownload}>Download Resume</button>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/kavi-kumar-680770337/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
