import * as React from "react";
import "../styles/components/Advantages.scss";

function Advantages() {
  return (
    <ul className="advantages">
      <li className="advantages__item">
        <span className="adventages__text adventages__text--big">18</span>
        <span className="adventages__text adventages__text--small">лет на рынке</span>
      </li>
      <li className="advantages__item">
        <span className="adventages__text adventages__text--big">24</span>
        <span className="adventages__text adventages__text--small">часа в сутки</span>
      </li>
      <li className="advantages__item">
        <span className="adventages__text adventages__text--big">400</span>
        <span className="adventages__text adventages__text--small">сотрудников</span>
      </li>
      <li className="advantages__item">
        <span className="adventages__text adventages__text--small">более</span>
        <span className="adventages__text adventages__text--big">600</span>
        <span className="adventages__text adventages__text--small">довольных клиентов</span>
      </li>
    </ul>
  );
}

export default Advantages;
