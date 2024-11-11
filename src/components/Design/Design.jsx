import "./style.css";
import design_1 from "../../assets/Design 1.png";
import design_2 from "../../assets/Design 2.png";
import design_3 from "../../assets/Design 3.png";
import design_4 from "../../assets/Design 4.png";
import design_5 from "../../assets/Design 5.png";
import Carousel from "../UI/Carousel";

const slides = [
  { slide: design_1, url: "https://www.figma.com/design/XrLVpYxvatgg9oli3b6wLi/expense-tracker?node-id=0-1&t=6ryBMjlPXG2mem2u-1" },
  { slide: design_2, url: "https://www.figma.com/design/Hahp25DmzWznPLZjSjBkSg/CRUD-operation?t=6ryBMjlPXG2mem2u-1" },
  { slide: design_3, url: "https://www.figma.com/design/AL90cFdyy2HY8X8XDTjZb5/Sign-in-Pages?t=6ryBMjlPXG2mem2u-1" },
  { slide: design_4, url: "https://www.figma.com/design/TdmHD99eCHjtrwuioJAz8h/Template-2?node-id=0-1&t=MzQUhe3UIPF0nJ7Y-1" },
  { slide: design_5, url: "https://www.figma.com/design/t05o5qBuHya1qru8qX2qZU/Template-1?node-id=0-1&t=tvHy5MzsEPUSmEJC-1" },
];

const Design = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center position-relative" style={{ minHeight: "100vh" }}>
     <div className="c-bg"></div>
      <div className="text-center mb-5">
        <h1>UI/UX DESIGN</h1>
      </div>
    <div className="container d-flex align-items-center justify-content-center">
      <Carousel autoSlide={true}>
        {slides.map((s,index) => (
          <img
          key={index}
          src={s.slide}
          alt={`Slide ${index + 1}`}
          url={s.url}
          />
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default Design;
