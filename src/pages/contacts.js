/* global VK */
import React from "react";
import { Script } from "gatsby";

import { Layout } from "@templates";
import { Social, PersonBlock } from "@components";
import { PERSONS } from "@data";
import { isBrowser } from "@helpers";

import "@styles/pages/Contacts.scss";

function Contacts() {
  return (
    <Layout title="Контакты">
      <div className="contacts">
        <div className="contacts__wrapper-for-title">
          <h1 className="contacts__title title--blue">Контакты</h1>
        </div>
        <div className="contacts__wrapper-for-info">
          <div className="contacts__info-block contacts__info-block--address">
            <span className="contacts__label">адрес</span>
            <a
              className="contacts__contact-info"
              target="blank"
              href="https://www.google.ru/maps/place/%D0%A2%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D0%B9%D0%B1%D1%83%D1%81%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+24+%2F+2%D0%92,+602,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+344065/@47.267898,39.7589927,17z/data=!3m1!4b1!4m5!3m4!1s0x40e3b779cc3bd9bf:0x4792c25aefd5c4d4!8m2!3d47.2678944!4d39.7611814"
            >
              г. Ростов-на-Дону, Троллейбусная, дом 24/2в
            </a>
          </div>
          <div className="contacts__info-block contacts__info-block--email">
            <span className="contacts__label">e-mail:</span>
            <a className="contacts__contact-info" target="blank" href="mailto:imperium.rostov@gmail.com">
              imperium.rostov@gmail.com
            </a>
          </div>
          <div className="contacts__info-block contacts__info-block--mainphone">
            <span className="contacts__label">телефон</span>
            <a className="contacts__contact-info" href="tel:+78632107858">
              8 (863) 210-78-58
            </a>
          </div>
          <Social />
          <div className="contacts__wrapper-for-persons">
            {PERSONS.map((person, index) => {
              return (
                <PersonBlock
                  key={`${index}-person-contact-page`}
                  image={person.image}
                  name={person.name}
                  phone={person.phone}
                  position={person.position}
                />
              );
            })}
          </div>
          <div className="contacts__vk-group" id="vk_groups"></div>
        </div>
      </div>
      <Script
        src="https://vk.com/js/api/openapi.js?169"
        type="text/javascript"
        onLoad={() => {
          if (isBrowser) {
            const globalWidth = window.screen.availWidth;
            let widgetWidth;

            if (globalWidth < 660) {
              widgetWidth = 220;
            } else if (globalWidth >= 660) {
              widgetWidth = 500;
            }

            VK.Widgets.Group(
              "vk_groups",
              {
                mode: 3,
                no_cover: 1,
                width: widgetWidth,
                color1: "FFFFFF",
                color2: "000000",
                color3: "5181B8"
              },
              215476223
            );
          }
        }}
      />
    </Layout>
  );
}

export default Contacts;
