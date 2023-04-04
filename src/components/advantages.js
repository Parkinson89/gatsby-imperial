import React from "react";
import "../styles/components/Advantages.scss";

function Advantages() {
  return (
    <ul className="advantages">
      <li className="advantages__item">
        <span className="advantages__text-big-wrapper">
          <span className="advantages__text advantages__text--arrow advantages__text--big">18</span>
        </span>
        <span className="advantages__text  advantages__text--small">
          лет на <br /> рынке
        </span>
      </li>
      <li className="advantages__item">
        <span className="advantages__text-big-wrapper">
          <span className="advantages__text advantages__text--clock advantages__text--big">24</span>
        </span>
        <span className="advantages__text  advantages__text--small">
          часа в <br /> сутки
        </span>
      </li>
      <li className="advantages__item">
        <span className="advantages__text-big-wrapper">
          <span className="advantages__text advantages__text--breaf  advantages__text--big">600</span>
        </span>
        <span className="advantages__text  advantages__text--small">сотрудников</span>
      </li>
      <li className="advantages__item">
        <span className="advantages__text-big-wrapper">
          <span className="advantages__text advantages__text--heands advantages__text--big">400</span>
        </span>
        <span className="advantages__text  advantages__text--small">
          и более довольных <br /> клиентов
        </span>
      </li>
    </ul>
  );
}

export default Advantages;
