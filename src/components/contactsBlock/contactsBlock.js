import React from "react";
import "./ContactsBlock.scss";

function ContactsBlock(props) {
  let color = "white";

  if (props.color === "black") {
    color = "black";
  }

  return (
    <section className="contacts-block">
      <span className="visually-hidden"> Контактная информация:</span>
      <div className="contacts-block__wrapper-for-info">
        <div className="contacts-block__info-block">
          <a className={`contacts-block__contact-info contacts-block__contact-info--phone ${color}`} href="tel:+78632107858">
            8 (863) 210-78-58
          </a>
        </div>
        <div className="contacts-block__info-block">
          <span className={`contacts-block__contact-info contacts-block__contact-info--briefcase ${color}`}>пн-пт с 9:00 по 18:30</span>
        </div>
        <div className="contacts-block__info-block">
          <a
            className={`contacts-block__contact-info contacts-block__contact-info--mail ${color}`}
            target="blank"
            href="mailto:imperium.rostov@gmail.com"
          >
            imperium.rostov@gmail.com
          </a>
        </div>
        <div className="contacts-block__info-block">
          <a
            className={`contacts-block__contact-info contacts-block__contact-info--location ${color}`}
            target="blank"
            href="https://www.google.ru/maps/place/%D0%A2%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D0%B9%D0%B1%D1%83%D1%81%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+24+%2F+2%D0%92,+602,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+344065/@47.267898,39.7589927,17z/data=!3m1!4b1!4m5!3m4!1s0x40e3b779cc3bd9bf:0x4792c25aefd5c4d4!8m2!3d47.2678944!4d39.7611814"
          >
            Ростов-на-Дону, ул. Троллейбусная, дом 24/2в
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactsBlock;
