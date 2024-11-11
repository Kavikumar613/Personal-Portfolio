import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import {
  faChevronLeft,
  faChevronRight,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);
  const [showToolTip, setToolTip] = useState(false);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  // Redirect to the URL of the current slide
  const redirectToCurrentSlide = () => {
    window.open(slides[curr].props.url, "_blank");
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <>
    <div
      className="slides-section"
      onClick={redirectToCurrentSlide}
      onMouseEnter={() => setToolTip(true)}
      onMouseLeave={() => setToolTip(false)}
    >
      <div
        className="slides"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="sildes-dir p-4">
        <button
          className="shadow text-secondary bg-white"
          onClick={(e) => {
            e.stopPropagation(); // Prevents the click event from bubbling up
            prev();
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="1x" />
        </button>

        <button
          className="shadow text-secondary bg-white"
          onClick={(e) => {
            e.stopPropagation(); // Prevents the click event from bubbling up
            next();
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} size="1x" />
        </button>
      </div>
      <div className="position-absolute bottom-0 mb-2 start-0 end-0  indicator">
        <div className="d-flex align-items-center justify-content-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`rounded-5 bg-secondary ${
                curr == i ? "p-2" : "bg-opacity-50"
              } `}
              style={{ width: "5px", height: "5px" }}
            ></div>
          ))}
        </div>
      </div>
      
    </div>
    {showToolTip && (
        <div className="custom-tooltip">
         Explore the design on Figma by clicking any slide.
        </div>
      )}
    </>
  );
};

export default Carousel;
