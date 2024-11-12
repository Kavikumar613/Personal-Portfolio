import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLocationArrow,
  faLocationCrosshairs,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { ThemeContext } from "../../context";
const Contact = () => {
  const [userame, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSendMail = async (e) => {
    e.preventDefault();
    if(!userame && !email && !subject && !message){
      alert("Please fill empty value");
      return;
    }
    
    await fetch(`${import.meta.env.VITE_GMAIL_PASS}/sendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userame,
        email,
        subject,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`🦄${data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        console.log(data.message);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        console.error("Error", err);
      });

      setEmail("");
      setMessage("");
      setSubject("");
      setUserame("");
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Seeking Opportunities to Grow and Contribute</h1>
          <div className="c-info">
            <div className="c-info-item">
              <FontAwesomeIcon icon={faPhone} size="2x" color="#239b56" />
              <span>+91 7092387832</span>
            </div>
            <div className="c-info-item">
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="#2471a3" />
              <span>kavikumarsenkili@gmail.com</span>
            </div>
            <div className="c-info-item">
              <FontAwesomeIcon icon={faLocationDot} size="2x" color="#cb4335" />
              <span>Chromepet, Chennai</span>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <strong>What's yor story?</strong>Get in touch. Always open to new career opportunities if the right role comes along.
          </p>
          <form onSubmit={handleSendMail}>
            <input
            value={userame}
              style={{backgroundColor : darkMode && "#333"}}
              type="text"
              placeholder="name"
              name="name"
              className={`${darkMode && "darkMode-text"}`}
              onChange={(e) => setUserame(e.target.value)}
            />
            <input
            value={email}
              style={{backgroundColor : darkMode && "#333"}}
              type="text"
              placeholder="email"
              name="email"
              className={`${darkMode && "darkMode-text"}`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
            value={subject}
              style={{backgroundColor : darkMode && "#333"}}
              type="text"
              placeholder="subject"
              name="subject"
              className={`${darkMode && "darkMode-text"}`}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
            value={message}
              style={{backgroundColor : darkMode && "#333"}}
              name="message"
              rows="5"
              placeholder="Message"
              className={`${darkMode && "darkMode-text"}`}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <footer className="text-center position-relative mt-5">
        <p>&copy; 2024 Kavi Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
