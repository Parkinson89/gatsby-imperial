import React from "react";
import "./Callback.scss";

function Callback({ id }) {
  return (
    <a id={id} href="#callbackwidget" className="callback-btn">
      <span className="callback-btn__text">Заказать звонок</span>
    </a>
  );
}

export default Callback;
