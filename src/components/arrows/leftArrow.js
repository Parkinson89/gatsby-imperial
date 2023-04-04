import React from "react";

import "./Arrows.scss";

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return <button className="button-slider button-slider--left" onClick={() => onClick()} />;
};

export default CustomLeftArrow;
