import * as React from "react"
import "../styles/pages/Equipments.scss";
import SlideShow from "../components/slideShow";
import Layout from "../components/layout";

import eq1 from "../assets/images/forEquipments/eq1.jpg";
import eq2 from "../assets/images/forEquipments/eq2.jpg";
import eq3 from "../assets/images/forEquipments/eq3.jpg";
import eq4 from "../assets/images/forEquipments/eq4.jpg";

function Equipments() {
  // useEffect(() => {
  //   const el = document.getElementsByClassName("header");
  //   el[0].scrollIntoView({ behavior: "smooth" });
  // });

  const firstSliderItems = [
    {
      id: 1,
      pic: eq1,
    },
    {
      id: 2,
      pic: eq3,
    },
  ];

  const secondSliderItems = [
    {
      id: 1,
      pic: eq2,
    },
    {
      id: 2,
      pic: eq4,
    },
  ];

  return (
    <Layout>
          <div className="equipments">
      <div className="equipments__wrapper-for-title">
        <h1 className="equipments__title title--blue">Оборудование</h1>
      </div>
      <div className="equipments__slider-wrapper">
        <SlideShow items={firstSliderItems} classNameModify="slideshow--left" />
        <SlideShow
          items={secondSliderItems}
          classNameModify="slideshow--right"
        />
      </div>
      <div className="equipments__wrapper-for-text">
        <p className="equipments__text">
          В сферу деятельности охранных организаций включёны следующие виды
          услуг:Другим направлением является проектирование, монтаж и
          техническое обслуживание систем охранно-пожарных, тревожных
          сигнализаций и оповещения граждан о пожаре, а также систем
          видеонаблюдения и систем доступа любой сложности. Указанная
          деятельность осуществляется в рамках имеющейся бессрочной Лицензии МЧС
          России.
        </p>
        <p className="equipments__text">
          Мы готовы оказать содействие Вашей организации от разработки концепции
          безопасности до воплощения её в жизнь, используя наши возможности по
          технической безопасности, а именно:
        </p>
        <ul>
          <li className="equipments__list-item">
            Возможности использования технических средств в охране предприятия,
            включая возможность разработки Технического задания под любой
            объект;
          </li>
          <li className="equipments__list-item">
            Создание систем видеонаблюдения любой сложности (на базе
            аналогового, цифрового и IP-видеонаблюдения), организация удаленного
            доступа к видеоматериалам через Интернет в режиме «on line»;
          </li>
          <li className="equipments__list-item">
            Создание рабочих проектов, подбор оборудования, а также монтаж
            систем охранно-пожарной и тревожной сигнализаций, а также систем
            оповещения и эвакуации при пожаре различных категорий;
          </li>
          <li className="equipments__list-item">
            Создание систем индивидуального доступа (систем контроля и
            управления доступом, систем учёта рабочего времени и др.);
          </li>
          <li className="equipments__list-item">
            Проведение любых противопожарных мероприятия (монтаж, техническое
            обслуживание и ремонт систем: пожаротушения, противопожарного
            водоснабжения, дымоудаления, противопожарных занавесов/завес,
            заполнений проёмов в противопожарных преградах, а также выполнения
            работ по огнезащите материалов, изделий и конструкций);
          </li>
          <li className="equipments__list-item">
            Проектирование, монтаж, надзор и обслуживание кабельных сетей
            электроснабжения и освещения офисов, производственных и складских
            помещений; поставка электротехнического оборудования,
            светотехнической и кабельной продукции; проектирование, поставка и
            монтаж систем бесперебойного и гарантированного электроснабжения
            особо важных объектов;
          </li>
          <li className="equipments__list-item">
            Техническое ежемесячное/ежеквартальное регламентное обслуживание
            любых технических систем безопасности. Возможность проведения
            ремонтных и восстановительных работ
          </li>
        </ul>
      </div>
    </div>
    </Layout>
  );
}

export default Equipments;
