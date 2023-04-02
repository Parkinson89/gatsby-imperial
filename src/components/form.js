import * as React from "react";
import "../styles/components/Form.scss";

const Form = (props) => {
  return (
    <div className="form-wrapper">
      <h1 className="form-title">Войти</h1>
      <p>{props.error}</p>
      <form className="form" method="post" href="http://localhost:7000/registration" autoComplete="off">
        <input onInput={props.inputListenerLogin} className="form__input" type="text" name="login" placeholder="Логин" />
        <input
          onInput={props.inputListenerPassword}
          className="form__input"
          type="password"
          name="individualPassword"
          placeholder="Пароль индивидуальный"
        />
        <button onClick={props.formListener} type="submit">
          отправить
        </button>
      </form>
    </div>
  );
};

export default Form;
