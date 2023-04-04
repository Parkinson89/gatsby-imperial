import React, { useState } from "react";
import { Link } from "gatsby";

import "./Header.scss";
import NavLowerList from "../navLowerList/navLowerList";
import Logo from "../../../../assets/images/logo-mobile.png";
import { PUBLIC_ROUTES } from "../../../../router/routes";
import NavMenu from "../navMenu/navMenu";

function Header() {
  const [navMenuVisible, setNavMenuVisible] = useState(false);
  // const [navClassName, setNavClassName] = React.useState("nav nav--closed");

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <nav className="nav">
            <button
              className="nav__toggle"
              type="button"
              onClick={() => {
                setNavMenuVisible(!navMenuVisible);
              }}
            >
              <span className="visually-hidden">Открыть меню</span>
              <span className="nav__toggle-line"></span>
              <span className="nav__toggle-line"></span>
              <span className="nav__toggle-line"></span>
            </button>
            <Link className="header__main-link" to="/">
              <img className="header__logo" src={Logo} width="37" height="44" alt="Логотип сайта." />
            </Link>
            <button type="button" className="header__phone-btn"></button>
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
                      <NavLowerList
                        modifier={"nav__lower-list-item--header"}
                        list={route}
                        startClassName={"nav__lower-list nav__lower-list--closed"}
                      />
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
      {navMenuVisible && <NavMenu setVisible={setNavMenuVisible} />}
    </>
  );
}

export default Header;
