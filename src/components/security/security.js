import React from "react";
import "./Security.scss";
import securityBack from "../../assets/images/security-back.jpg";
import securityMan from "../../assets/images/security-man.jpg";

function Security(props) {
  return (
    <div className="security" id={props.id}>
      <h1 className="security__title title--blue">Охрана</h1>
      <div className="security__main-wrapper">
        <img className="security__pic security__pic--back" src={securityBack} alt="Изображение формы." />
        <div className="security__wrapper-for-list">
          <p className="security__text-before-list">В сферу деятельности охранных организаций включёны следующие виды услуг:</p>
          <ul className="security__list-services">
            <li className="security__item">- защита жизни и здоровья граждан;</li>
            <li className="security__item">- охрана объектов и (или) имущества (в том числе при его транспортировке);</li>
            <li className="security__item">
              - охрана объектов и (или) имущества на объектах с осуществлением работ по проектированию, монтажу и эксплуатационному обслуживанию
              технических средств охраны;
            </li>
            <li className="security__item">
              - консультирование и подготовка рекомендаций клиентам по вопросам правомерной защиты от противоправных посягательств;
            </li>
            <li className="security__item">- обеспечение внутриобъектового и пропускного режимов на объектах;</li>
            <li className="security__item">
              - охрана объектов и (или) имущества, а также обеспечение внутриобъектового и пропускного режимов на объектах, которые имеют особо важное
              значение для обеспечения жизнедеятельности и безопасности государства и населения.
            </li>
          </ul>
        </div>
        <div className="security__el-wrapper">
          <img className="security__pic security__pic--man" src={securityMan} alt="Изображение сотрудника." />
          <p className="security__text-services-price">
            <span className="security__blue-words">Стоимость услуг </span>
            рассчитывается индивидуально, в рамках коммерческих предложений, исходя из Технических заданий, проектов и т.д., на основании действующих
            в момент расчёта цен на услуги, поставщиков, а также в рамках ценообразования сметных расчётов.
          </p>
        </div>
        <p className="security__text-more-info">
          ГРУППА КОМПАНИЙ (ХОЛДИНГ) «ИМПЕРИУМ», представлена как независимая структура с 2019 года, создана на базе предприятий, представленных на
          рынке безопасности с 2003 года. Имеет возможность оказывать содействие предприятиям любой формы собственности от разработки концепций
          безопасности до воплощения их в жизнь. Акцентируем внимание на предоставлении комплекса услуг, направленных на экономическую безопасность
          предприятия. Территориальный охват оказания услуг - Ростовская область, Южный Федеральный округ и Северный Кавказ.
        </p>
      </div>
    </div>
  );
}

export default Security;
