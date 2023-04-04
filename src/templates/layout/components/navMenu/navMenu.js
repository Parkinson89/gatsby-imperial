import React from "react";
import { Link } from "gatsby";

import "./NavMenu.scss";
import Logo from "../../../../assets/images/logo-mobile.png";
import { PUBLIC_ROUTES } from "../../../../router/routes";
import ContactsBlock from "../contactsBlock/contactsBlock";
import Social from "../../../../components/social/social";
import Callback from "../../../../components/callback/callback";

function NavMenu(props) {
  return (
    <div className="menu">
      <nav className="menu__nav">
        <Link className="menu__main-link" to="/">
          <img className="header__logo" src={Logo} width="37" height="44" alt="Логотип сайта." />
        </Link>
        <button
          className="menu__toggle"
          type="button"
          onClick={() => {
            props.setVisible(false);
          }}
        >
          <span className="visually-hidden">Открыть меню</span>
        </button>
      </nav>
      <ul className="menu__nav-list">
        {PUBLIC_ROUTES.map((route) => {
          if (route.textLink !== null) {
            return (
              <li key={route.path} className="menu__nav-item">
                <Link className="menu__nav-link" to={route.path}>
                  {route.textLink}
                </Link>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <div className="menu__callback-wrapper">
        <Callback />
      </div>
      <ContactsBlock color="black" />
      <Social />
    </div>
  );
}

export default NavMenu;
