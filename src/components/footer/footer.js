import React, { useEffect } from "react";
import "./Footer.scss";
import FooterNavList from "../footerNavList/footerNavList";
import Social from "../social/social";
import ContactsBlock from "../contactsBlock/contactsBlock";
import logo from "../../assets/images/logo.png";
import { Link, Script } from "gatsby";
/* global ymaps */
const isBrowser = typeof window !== "undefined";

function init() {
  var myMap = new window.ymaps.Map("map", {
    center: [47.267799, 39.761599],
    zoom: 16
  });
  var myPlacemark = new window.ymaps.Placemark([47.267799, 39.761599], {
    balloonContentHeader: 'Группа компаний "Империум"',
    balloonContentBody: "г. Ростов-на-Дону, ул. Троллейбусная, дом 24/2в, офис 602",
    hintContent: "Мы здесь"
  });
  myMap.geoObjects.add(myPlacemark);
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper-for-map-ang-photo">
        <div className="footer__map" id="map"></div>
        <div className="footer__building-background"></div>
      </div>
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
      <Script
        src="https://api-maps.yandex.ru/2.1/?apikey=795b4f53-91b9-41cc-80a4-73bdad8ad195&lang=ru_RU"
        type="text/javascript"
        onLoad={() => {
          console.log(1);
          if (isBrowser) {
            console.log(2);
            window.ymaps.ready(init);
          }
        }}
      />
    </footer>
  );
}

export default Footer;
