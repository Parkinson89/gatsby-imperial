import React, { useEffect } from "react";
import "../styles/pages/Services.scss";
import { Layout, ServicesList, LawBlock } from "../components";
import { openUl } from "../components/servicesList/servicesList";
import { UL_SERVICES } from "../data";

function Services(props) {
  useEffect(() => {
    setTimeout(() => {
      if (props?.location?.state?.hash) {
        const hash = props.location.state.hash;
        const el = hash && document.getElementById(hash);

        let id;

        UL_SERVICES.forEach((item) => {
          if (item.idName === hash) {
            id = item.id;
          }
        });

        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        openUl(id);
      } else {
        const el = document.getElementsByClassName("header");
        el[0].scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }, [props]);

  return (
    <Layout>
      <div className="services">
        <div className="services__wrapper-for-title">
          <h1 className="services__title title--blue">Услуги</h1>
        </div>
        <LawBlock />
        <ServicesList />
      </div>
      <div id="physical">here</div>
    </Layout>
  );
}

export default Services;
