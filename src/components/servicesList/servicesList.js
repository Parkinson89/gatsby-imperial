import React from "react";

import { UL_SERVICES } from "@data";
import { openUl } from "@helpers";

import "./ServicesList.scss";

function ServicesList() {
  return (
    <div className="services-block">
      <h1 className="services-block__title">Полный перечень наших услуг:</h1>
      <ul className="services-block__list">
        {UL_SERVICES.map((service) => (
          <li id={service.idName} key={service.id} className="services-block__item">
            <button
              id={service.id + 100}
              className="services-block__item-button"
              onClick={() => {
                openUl(service.id);
              }}
            >
              <span className="visually-hidden">открыть</span>
            </button>
            <h2 className="services-block__item-title">{service.title}</h2>
            <ul id={service.id} className="services-block__item-lower-list services-block__item-lower-list--list-hidden">
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;
