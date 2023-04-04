import React from "react";
import "../styles/components/Callback.scss";

function Callback(props) {
  return (
    <a id={props.id} href="#callbackwidget" className="callback-btn">
      <span className="callback-btn__text">Заказать звонок</span>
    </a>
  );
}

export default Callback;
