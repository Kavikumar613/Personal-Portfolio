import "./Style.css";
import chat_app from "../../assets/Chat-App.png";
import customer_Management from "../../assets/Customer_Management.png";
import noImage from "../../assets/Image_not_available.png";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context";

const Project = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [isExpanded, setIsExpanded] = useState({});

  const toggleText = (index) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific card's expanded state
    }));
  };

  const projects = [
    {
      name: "Chat App",
      beforeText: `The "Chat App" is a real-time messaging platform developed using React and Firebase.After successful login`,
      afterText:
        ",users can join specific chat rooms,facilitating organized conversations.",
      link: "https://chat-app-f2a09.web.app",
      image: chat_app,
    },
    {
      name: "Customer Management Dashboard",
      beforeText: `Developed a customer management table using React, Firebase, and Bootstrap`,
      afterText:
        ", with features to download data in PDF, CSV, and Excel formats, and copy data as text.",
      link: "https://crud-app-64e34.web.app",
      image: customer_Management,
    },
    {
      name: "Employement Form",
      beforeText: `Supported project development by creating more than 40 input fields of various types`,
      afterText: `, organizing all data, storing it in the database, and converting it into a pre-defined PDF
template`,
      link: "#",
      image: null,
    },
    {
      name: "Label Management",
      beforeText: `Supported the creation of label and filter management automation.Collected all labels and`,
      afterText: `
filters from the manager’s email inbox, then replicated the label and filter hierarchy in team
members' inboxes using a user-friendly interface.`,
      link: "#",
      image: null,
    },
  ];

  return (
    <>
    <div
  className="container-fluid d-flex flex-column align-items-center justify-content-center"
  style={{ minHeight: "100vh" }}
>
  <div className="header text-center mb-5">
    <h1>PROJECT</h1>
    <p className="px-md-5 px-3 p-desc">
      I have six months of experience working with React.js, front-end development, Figma, Firebase, SQL, and Google Apps Script. During this time, I have contributed to building responsive web applications, creating intuitive designs, and ensuring smooth integration between front-end and back-end technologies.
    </p>
  </div>

  <div className="container d-flex justify-content-center">
    <div className="row g-3 justify-content-center">
      {projects.map((result, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-3">
          <div
            className={`card ${darkMode ? "border-white" : "border-dark"}`}
            style={{
              backgroundColor: darkMode ? "#333" : "#fff",
              color: darkMode ? "white" : "black",
              width: "100%",
            }}
          >
            <img
              className="card-img-top"
              style={{ height: "150px", objectFit: "cover" }}
              src={result.image || noImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{result.name}</h5>
              <p className="card-text">
                {result.beforeText}
                {isExpanded[index] && <span>{result.afterText}</span>}
                <span
                  className={`text-${darkMode ? "white" : "primary"} pointer`}
                  onClick={() => toggleText(index)}
                >
                  {isExpanded[index] ? " Less" : " ..."}
                </span>
              </p>
              <a
                title={result.link}
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {result.link === "#" ? "Not Available" : "Check App"}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default Project;
