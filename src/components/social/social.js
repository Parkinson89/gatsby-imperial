import React from "react";

import "./Social.scss";

function Social() {
  const socialList = [
    {
      name: "inst",
      link: "https://www.instagram.com/imperium.rostov/"
    },
    {
      name: "vk",
      link: "https://vk.com/imperiumrnd"
    },
    {
      name: "dzen",
      link: "https://zen.yandex.ru/id/62ff44c8ee99f85888b552a6"
    },
    {
      name: "whats",
      link: "https://wa.me/79282791907"
    },
    {
      name: "telegram",
      link: "https://t.me/imperiumrnd"
    }
  ];

  return (
    <div className="social">
      <svg className="social__sprite">
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="inst">
          <path
            fill="rgba(255, 255, 255, 0)"
            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
          />
          <path
            fill="rgba(255, 255, 255, 0)"
            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
          />
          <path
            fill="#fff"
            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
          />
          <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
          <path
            fill="#fff"
            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
          />
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="dzen">
          <path
            fill="#2f3842"
            d="M16.7 16.7c-2.2 2.27-2.36 5.1-2.55 11.3 5.78 0 9.77-.02 11.83-2.02 2-2.06 2.02-6.24 2.02-11.83-6.2.2-9.03.35-11.3 2.55M0 14.15c0 5.59.02 9.77 2.02 11.83 2.06 2 6.05 2.02 11.83 2.02-.2-6.2-.35-9.03-2.55-11.3-2.27-2.2-5.1-2.36-11.3-2.55M13.85 0C8.08 0 4.08.02 2.02 2.02.02 4.08 0 8.26 0 13.85c6.2-.2 9.03-.35 11.3-2.55 2.2-2.27 2.36-5.1 2.55-11.3m2.85 11.3C14.5 9.03 14.34 6.2 14.15 0c5.78 0 9.77.02 11.83 2.02 2 2.06 2.02 6.24 2.02 11.83-6.2-.2-9.03-.35-11.3-2.55"
          ></path>
          <path
            fill="rgba(255, 255, 255, 0)"
            d="M28 14.15v-.3c-6.2-.2-9.03-.35-11.3-2.55-2.2-2.27-2.36-5.1-2.55-11.3h-.3c-.2 6.2-.35 9.03-2.55 11.3-2.27 2.2-5.1 2.36-11.3 2.55v.3c6.2.2 9.03.35 11.3 2.55 2.2 2.27 2.36 5.1 2.55 11.3h.3c.2-6.2.35-9.03 2.55-11.3 2.27-2.2 5.1-2.36 11.3-2.55"
          ></path>
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308" fill="#fff" id="whats">
          <g>
            <path
              d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
        c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
        c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
        c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
        c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
        c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
        c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
        c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
        c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
        C233.168,179.508,230.845,178.393,227.904,176.981z"
            />
            <path
              d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
        c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
        c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
         M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
        l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
        c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
        C276.546,215.678,222.799,268.994,156.734,268.994z"
            />
          </g>
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="vk">
          <path fill="#1976d2" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
          <path
            fill="#fff"
            d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z"
          />
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="telegram">
          <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
          <path
            fill="#fff"
            d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
          />
          <path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z" />
          <path
            fill="#cfd8dc"
            d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
          />
        </symbol>
      </svg>
      <ul className="social__list">
        {socialList.map((item) => (
          <li key={item.name} className={"social__item social__item--" + item.name}>
            <a target="_blank" rel="noreferrer" href={item.link} className={"social__link social__link--" + item.name}>
              <svg className={"social__icon social__icon--" + item.name}>
                <use xlinkHref={"#" + item.name}></use>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
