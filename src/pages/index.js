import React, { useEffect } from "react";
import { CERTIFICATES, LETTERS, LOGOS, PERSONS } from "../data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Layout, PersonBlock, Advantages, WorkAdvantages, CompanyGroup, Security, Callback, Slider } from "../components";

import "../styles/index.scss";
import "../styles/pages/Main.scss";
import "../styles/components/Carousel.scss";
import "../styles/components/OurClients.scss";
import "../styles/components/Certificates.scss";
import "../styles/components/Letters.scss";

const IndexPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
      if (props?.location?.state?.hash) {
        const hash = props.location.state.hash;
        const el = hash && document.getElementById(hash);

        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        const el = document.getElementsByClassName("header");
        el[0].scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }, [props]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1920, min: 1200 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1200, min: 660 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 1
    }
  };

  return (
    <Layout>
      <div>
        <div className="main">
          <CompanyGroup />
          <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile", "tablet"]} containerClass="carousel-container">
            {PERSONS.map((person) => {
              return <PersonBlock image={person.image} name={person.name} phone={person.phone} position={person.position} />;
            })}
            {/* <PersonBlock />
            <PersonBlock /> */}
            {/* <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div> */}
          </Carousel>
          ;
          {/* <Carousel>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel> */}
          {/* <PersonBlock /> */}
        </div>
        <Advantages />
        <Slider
          modalExist={false}
          id="ourClients"
          firstTitle={"Клиенты и партнёры"}
          pics={LOGOS}
          className="our-clients"
          mobileTranslate={80}
          mobileCountCenter={3}
        />
        <Slider
          modalExist={true}
          id="certificates"
          firstTitle={"Лицензии"}
          pics={CERTIFICATES}
          className="certificates"
          mobileTranslate={220}
          mobileCountCenter={1}
        />
        <Slider
          modalExist={true}
          id="letters"
          firstTitle={"Благодарственные письма"}
          pics={LETTERS}
          className="letters"
          mobileTranslate={220}
          mobileCountCenter={1}
        />
        <Security id="security" />
        <WorkAdvantages />
        <div className="security-text-info">
          <p>
            <b>Охрана</b> - актуальная услуга в нашем нестабильном мире, где каждый день возникают новые угрозы и вызовы для нашей безопасности. Как
            юридическое или физическое лицо, вы должны быть уверены в своей безопасности и защите в любой ситуации.
          </p>
          <p>
            Группа Компаний "Холдинг” Империум - это компании, которые предоставляют широкий спектр услуг по охране, включая физическую охрану,
            техническую безопасность, мониторинг, управление доступом и многое другое. Мы специализируемся на обеспечении высококачественной и
            профессиональной охраны для юридических и физических лиц.
          </p>
          <p>
            Наша компания активно развивается и стремится стать лучшей в отрасли. Мы постоянно совершенствуем наши услуги и инвестируем в новые
            технологии и оборудование, чтобы обеспечить нашим клиентам максимальную защиту.
          </p>
          <p>
            Наша команда профессионалов состоит из высококвалифицированных специалистов, которые имеют многолетний опыт работы в охранной отрасли. Мы
            строго следим за процессом найма и отбираем только лучших кандидатов, чтобы обеспечить высокий уровень квалификации наших сотрудников.
          </p>
          <p>
            Мы гордимся тем, что мы можем предоставить нашим клиентам максимально надежную и эффективную охрану. Если вы ищете надежную компанию,
            которая обеспечит вас высококачественной охраной, то Группа Компаний "Холдинг Империум" - идеальный выбор для вас. Свяжитесь с нами
            сегодня, чтобы узнать больше о наших услугах и как мы можем помочь вам обеспечить безопасность и защиту в любых условиях.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
