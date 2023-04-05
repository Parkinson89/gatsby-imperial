import React from "react";

import "./WorkAdvantages.scss";

function WorkAdvantages() {
  return (
    <ul className="work-advantages">
      <li className="work-advantages__item work-advantages__item--arrow">
        <span className="work-advantages__text">Выслуга лет</span>
      </li>
      <li className="work-advantages__item work-advantages__item--shield">
        <span className="work-advantages__text">Доверие</span>
      </li>
      <li className="work-advantages__item work-advantages__item--agent">
        <span className="work-advantages__text">Профессионализм</span>
      </li>
    </ul>
  );
}

export default WorkAdvantages;
