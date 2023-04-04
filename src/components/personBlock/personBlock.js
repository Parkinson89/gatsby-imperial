import React from "react";
import "./PersonBlock.scss";

function PersonBlock({ image, name, phone, position }) {
  return (
    <div className="person-block">
      <img src={image} className="person-block__img" />
      <div className="person-block__text-info">
        <span className="person-block__text-info-name">{name}</span>
        <p className="person-block__text-info-contact-info">
          <span className="person-block__mail">test@mail.ru</span>
          <span className="person-block__phone">{phone}</span>
        </p>
        <span className="person-block__text-info-position">{position}</span>
      </div>
    </div>
  );
}

export default PersonBlock;
