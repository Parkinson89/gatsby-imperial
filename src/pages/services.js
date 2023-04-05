import React, { useEffect } from "react";

import { Layout } from "@templates";
import { ServicesList, LawBlock } from "@components";
import { openUl } from "@helpers";
import { UL_SERVICES } from "@data";

import "@styles/pages/Services.scss";
import security from "@assets/images/vk-links/security.png";
import videoObserver from "@assets/images/vk-links/video-observer.png";

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
    <Layout title="Услуги">
      <div className="services">
        <div className="services__wrapper-for-title">
          <h1 className="services__title title--blue">Услуги</h1>
        </div>
        <LawBlock />
        <ServicesList />
        <div className="services__wrapper-for-vk-images">
          <a className="services__vk-link" href="https://vk.com/@imperiumrnd-zachem-vam-ohrana" target="_blank" rel="noreferrer">
            <img src={security} width="521" height="497" alt="Изображение ссылка, зачем вам охрана?" />
          </a>
          <a className="services__vk-link" href="https://vk.com/@imperiumrnd-dlya-chego-neobhodimo-videonabludenie" target="_blank" rel="noreferrer">
            <img src={videoObserver} width="738" height="497" alt="Изображение ссылка, для чего необходимо видеонаблюдение?" />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
