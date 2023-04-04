import React from "react";

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, slidesToShow, totalItems }
  } = rest;
  return (
    <div className="carousel-button-group">
      {currentSlide > 0 && <button className="button-slider button-slider--left" onClick={() => previous()} />}
      {slidesToShow + currentSlide !== totalItems && <button className="button-slider button-slider--right" onClick={() => next()} />}
    </div>
  );
};

export default ButtonGroup;
