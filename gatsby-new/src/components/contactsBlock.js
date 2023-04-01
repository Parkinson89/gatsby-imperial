import * as React from "react"
import "../styles/components/ContactsBlock.scss";

function ContactsBlock() {
  return (
    <section className="contacts-block">
      <svg className="contacts-block__sprite">
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 308 308"
          fill="#fff"
          id="telephone"
        >
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
          </g>
        </symbol>

        <symbol
          viewBox="0 0 19 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="email"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.1393 10.4663L11.8089 6.5L16.1393 2.53365L15.5488 1.90264L9.25 7.67188L2.95119 1.90264L2.36068 2.53365L6.69111 6.5L2.36068 10.4663L2.95119 11.0974L7.33083 7.08594L9.25 8.84375L11.1692 7.08594L15.5488 11.0974L16.1393 10.4663ZM1.57596 0.25C0.766943 0.25 0.111107 0.948839 0.111107 1.80786V11.1921C0.111107 12.0525 0.761623 12.75 1.57596 12.75H16.924C17.733 12.75 18.3889 12.0512 18.3889 11.1921V1.80786C18.3889 0.947478 17.7384 0.25 16.924 0.25H1.57596Z"
            fill="#fff"
          />
        </symbol>

        <symbol
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="geo"
        >
          <path
            d="M8.5 0C4.15169 0 0.625 3.52669 0.625 7.875C0.625 12.9334 4.42846 15.1449 5.26923 16.1538C7.28846 18.5769 7.40257 21 8.5 21C9.59743 21 9.71154 18.5769 11.7308 16.1538C12.5715 15.1449 16.375 12.9334 16.375 7.875C16.375 3.52669 12.8483 0 8.5 0ZM8.5 13.125C5.60069 13.125 3.25 10.7743 3.25 7.875C3.25 4.97569 5.60069 2.625 8.5 2.625C11.3993 2.625 13.75 4.97569 13.75 7.875C13.75 10.7743 11.3993 13.125 8.5 13.125ZM8.5 5.25C7.051 5.25 5.875 6.426 5.875 7.875C5.875 9.324 7.051 10.5 8.5 10.5C9.949 10.5 11.125 9.324 11.125 7.875C11.125 6.426 9.949 5.25 8.5 5.25Z"
            fill="#fff"
          />
        </symbol>
      </svg>
      <span className="visually-hidden"> Контактная информация:</span>
      <div className="contacts-block__wrapper-for-info">
        <div className="contacts-block__info-block">
          <svg className="contacts-block__contact-icon contacts-block__contact-icon--telephone">
            <use xlinkHref="#telephone"></use>
          </svg>
          <a className="contacts-block__contact-info" href="tel:+78632107858">
            8 (863) 210-78-58
          </a>
        </div>
        <div className="contacts-block__info-block">
          <svg className="contacts-block__contact-icon contacts-block__contact-icon--email">
            <use xlinkHref="#email"></use>
          </svg>
          <a
            className="contacts-block__contact-info"
            target="blank"
            href="mailto:imperium.rostov@gmail.com"
          >
            imperium.rostov@gmail.com
          </a>
        </div>
        <div className="contacts-block__info-block">
          <svg className="contacts-block__contact-icon contacts-block__contact-icon--geo">
            <use xlinkHref="#geo"></use>
          </svg>
          <a
            className="contacts-block__contact-info"
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
