import * as React from "react";
import { Link } from "gatsby";

import "../styles/components/Header.scss";
import NavLowerList from "./navLowerList";
import Logo from "../assets/images/logo.png";
import { PUBLIC_ROUTES } from "../router/routes";

function Header() {
  const [navClassName, setNavClassName] = React.useState("nav nav--closed");

  return (
    <header className="header">
      <div className="page-header__wrapper">
        <nav className={navClassName}>
          <button
            className="nav__toggle"
            type="button"
            onClick={() => {
              if (navClassName === "nav nav--closed") {
                setNavClassName("nav nav--opened");
              } else {
                setNavClassName("nav nav--closed");
              }
            }}
          >
            <span className="visually-hidden">Открыть меню</span>
          </button>
          <Link className="header__main-link" to="/">
            <img className="header__logo" src={Logo} width="100" height="100" alt="Логотип сайта." />
          </Link>
        </nav>
        <ul className="nav__list">
          {PUBLIC_ROUTES.map((route) => {
            if (route.textLink !== null) {
              return (
                <li key={route.path} className="nav__item">
                  <Link className="nav__link" to={route.path}>
                    {route.textLink}
                  </Link>
                  {route.lowerLavelLinks ? (
                    <NavLowerList modifier={"nav__lower-list-item--header"} list={route} startClassName={"nav__lower-list nav__lower-list--closed"} />
                  ) : null}
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
