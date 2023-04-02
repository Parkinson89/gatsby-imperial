import * as React from "react";
import "../styles/components/Footer.scss";
import FooterNavList from "./footerNavList";
import Social from "./social";
import ContactsBlock from "./contactsBlock";
import logo from "../assets/images/logo.png";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__map" id="map"></div>
      <FooterNavList />
      <div className="footer__wrapper-for-lower-lavel">
        <div className="footer__wrapper-for-logo">
          <Link to="/">
            <img className="footer__logo" src={logo} width="50" height="50" alt="Логотип компании." />
          </Link>
          <p className="footer__copyright">©2022 группа компаний</p>
        </div>
        <Social />
        <ContactsBlock color="white" />
      </div>
    </footer>
  );
}

export default Footer;
