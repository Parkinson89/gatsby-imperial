import React, { useEffect } from "react";

import Layout from "../components/layout";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PersonBlock from "../components/personBlock";
import Advantages from "../components/advantages";
import WorkAdvantages from "../components/workAdvantages";

import "../styles/index.scss";
import "../styles/pages/Main.scss";
import "../styles/components/OurClients.scss";
import "../styles/components/Certificates.scss";
import "../styles/components/Letters.scss";

import CompanyGroup from "../components/companyGroup";
import Security from "../components/security";
import Callback from "../components/callback";
import Slider from "../components/slider";

import agro from "../assets/images/companies/agro.png";
import gazprom from "../assets/images/companies/Gazprom-Logo-rus.png";
import loko from "../assets/images/companies/loko.png";
import mts from "../assets/images/companies/mts.png";
import theatre from "../assets/images/companies/theatre.png";
import eco from "../assets/images/companies/eco.png";
import lukoil from "../assets/images/companies/lukoil.png";
import rostov from "../assets/images/companies/rostov.png";
import PNK from "../assets/images/companies/pnk-group_logo.png";
import eksmo from "../assets/images/companies/eksmo.png";

import cer11 from "../assets/images/certificates/cer-1-1.jpg";
import cer12 from "../assets/images/certificates/cer-1-2.jpg";
import cer13 from "../assets/images/certificates/cer-1-3.jpg";
import cer14 from "../assets/images/certificates/cer-1-4.jpg";
import cer2 from "../assets/images/certificates/cer-2-1.jpg";
import cer31 from "../assets/images/certificates/cer-3-1.jpg";
import cer32 from "../assets/images/certificates/cer-3-2.jpg";
import cer41 from "../assets/images/certificates/cer-4-1.jpg";
import cer42 from "../assets/images/certificates/cer-4-2.jpg";

import let1 from "../assets/images/letters/let1.jpg";
import let2 from "../assets/images/letters/let2.jpg";
import let3 from "../assets/images/letters/let3.jpg";
import let4 from "../assets/images/letters/let4.jpg";
import let5 from "../assets/images/letters/let5.jpg";

const IndexPage = (props) => {
  const LOGOS = [agro, gazprom, loko, mts, theatre, eco, lukoil, rostov, PNK, eksmo];
  const CERTIFICATES = [cer11, cer12, cer13, cer14, cer31, cer32, cer41, cer42, cer2];
  const LETTERS = [let1, let2, let3, let4, let5];

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

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 660, min: 0 },
  //     items: 1
  //   }
  // };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
          <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile", "tablet"]}>
            <PersonBlock />
            <PersonBlock />
            <PersonBlock />
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
      </div>
    </Layout>
  );
};

export default IndexPage;
