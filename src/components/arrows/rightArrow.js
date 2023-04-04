import React from "react";

import "./Arrows.scss";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return <button className="button-slider button-slider--right" onClick={() => onClick()} />;
};

export default CustomRightArrow;
