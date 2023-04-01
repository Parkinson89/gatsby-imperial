import * as React from "react"
import "../styles/pages/Services.scss";
import Layout from "../components/layout"
import ServicesList from "../components/servicesList";
import LawBlock from "../components/lawBlock";
// import { useLocation } from "react-router-dom";
// import { openUl } from "../../../components/servicesList/ServicesList";
import { UL_SERVICES } from "../data/dataServices";

function Services() {
  // let location = useLocation();

  // useEffect(() => {
  //   const hash = location.hash;
  //   if (hash) {
  //     const el = hash && document.getElementById(hash.slice(1));

  //     let id;

  //     UL_SERVICES.forEach((item) => {
  //       if (item.idName === hash.slice(1)) {
  //         id = item.id;
  //       }
  //     });

  //     if (el) {
  //       el.scrollIntoView({ behavior: "smooth" });
  //     }

  //     openUl(id);
  //   } else {
  //     const el = document.getElementsByClassName("header");
  //     el[0].scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [location]);

  return (
    <Layout>
          <div className="services">
      <div className="services__wrapper-for-title">
        <h1 className="services__title title--blue">Услуги</h1>
      </div>
      <LawBlock />
      <ServicesList />
    </div>
    </Layout>
  );
}

export default Services;
