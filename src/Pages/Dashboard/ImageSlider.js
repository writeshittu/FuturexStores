import React, { useState } from "react";
import "./slider.css";

const ImageSlider = () => {
  const [current, setcurrent] = useState(0);

  const slides = [
    {
      imag:
        "https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      imag:
        "https://images.unsplash.com/photo-1542228262-3d663b306a53?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      imag:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      imag:
        "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      imag:
        "https://res.cloudinary.com/undercover/image/upload/v1609585875/tenancy-hub/z66mbyl3jqrtlijddefx.jpg",
    },
  ];
  const nextSlider = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };
  //   setInterval(() => {
  //     setcurrent(current === 0 ? length - 1 : current - 1);
  //   }, 6000);
  const prevSlider = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };
  //   console.log(current);
  const length = slides.length;
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <span className="left-arrow" onClick={nextSlider}>
        prev
      </span>
      <span className="right-arrow" onClick={prevSlider}>
        Next
      </span>
      {slides.map((item, index) => (
        <div className={index === current ? " slide active" : "slide"}>
          {index === current && (
            <img src={item.imag} className="image" alt="slide imsage" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
