import React from "react";
import "./FooterNavList.scss";
import { Link } from "gatsby";
import { PUBLIC_ROUTES } from "@router/routes";
import NavLowerList from "../navLowerList/navLowerList";

function FooterNavList() {
  return (
    <nav className="footer__nav">
      <ul className="footer__nav-list">
        {PUBLIC_ROUTES.map((route) => {
          if (route.textLink !== null) {
            return (
              <li key={route.path} className={`footer__nav-item footer__nav-item--${route.modifier}`}>
                <Link className="footer__nav-link" to={route.path}>
                  {route.textLink}
                </Link>
                {route.lowerLevelLinks ? (
                  <NavLowerList modifier={""} list={route} buttonExist={false} startClassName={"nav__lower-list nav__lower-list--opened"} />
                ) : null}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </nav>
  );
}

export default FooterNavList;
