import React from "react";
import "../styles/components/PersonBlock.scss";
import person from "../assets/images/persons/mobile/1.jpg";

function PersonBlock(props) {
  return (
    <div className="person-block">
      <img src={person} className="person-block__img" />
      <div className="person-block__text-info">
        <span className="person-block__text-info-name">Иванов Иван Иванович</span>
        <p className="person-block__text-info-contact-info">
          <span className="person-block__mail">test@mail.ru</span>
          <span className="person-block__phone">+79210000000</span>
        </p>
        <span className="person-block__text-info-position">Генеральный директор ООО “Империум”</span>
      </div>
    </div>
  );
}

export default PersonBlock;
