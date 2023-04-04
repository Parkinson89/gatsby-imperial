import React from "react";
import "./ServicesList.scss";
import { UL_SERVICES } from "../../data";

export const openUl = (id) => {
  const button = document.getElementById(id + 100);
  const item = document.getElementById(id);
  if (item.className === "services-block__item-lower-list services-block__item-lower-list--list-hidden") {
    item.classList.remove("services-block__item-lower-list--list-hidden");
    item.classList.add("services-block__item-lower-list--list-show");
    button.classList.add("services-block__item-button--click");
  } else {
    item.classList.remove("services-block__item-lower-list--list-show");
    item.classList.add("services-block__item-lower-list--list-hidden");
    button.classList.remove("services-block__item-button--click");
  }
};

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
