import React from "react";
import { Layout } from "@templates";

import "@styles/pages/Vacancies.scss";

function Vacancies() {
  return (
    <Layout title="Трудоустройство">
      <div className="vacancies">
        <div className="vacancies__wrapper-for-title">
          <h1 className="vacancies__title title--blue">Трудоустройство</h1>
        </div>
        <div className="vacancies__main-wrapper">
          <div className="vacancies__wrapper-for-phone">
            <a className="vacancies__contact-info title--blue" href="tel:+78632107858">
              8 (863) 210-78-58
            </a>
            <p className="vacancies__title-for-phone">Телефона отдела кадров</p>
          </div>
          <p className="vacancies__text">
            Перечень документов для трудоустройства, представляемых будущим сотрудником при заключении трудового контракта, приводится в ст. 65
            Трудового Кодекса Российской Федерации. Эти документы являются обязательными. Их можно условно разделить на 2 группы. Первая - это
            документы, которые обязан представить любой работник любому работодателю. Вторая - документы, которые должен представить работник, имеющий
            определенный статус, или документы, обязательно запрашиваемые нанимателем в связи с особенностями предлагаемой работы.
          </p>
          <p className="vacancies__text">К первой группе относятся: </p>
          <ul className="vacancies__list">
            <li className="vacancies__list-item">Паспорт гражданина Российской Федерации или иное удостоверение личности;</li>
            <li className="vacancies__list-item">
              Трудовая книжка или сведения о трудовой деятельности, если работник перешел на ЭТК (электронную трудовую книжку);
            </li>
            <li className="vacancies__list-item">СНИЛС (страховой номер индивидуального лицевого счёта) или АДИ-РЕГ (Электронный СНИЛС);</li>
            <li className="vacancies__list-item">ИНН (идентификационный номер налогоплательщика).</li>
          </ul>
          <p className="vacancies__text">
            Трудовая книжка - это главный документ, подтверждающий стаж работника. Трудовая книжка может не представляться совместителями (ст. 283 ТК
            РФ). Когда работник принимается на работу впервые и, следовательно, не имеет трудовой книжки, наниматель обязан ее оформить (ст. 65 ТК
            РФ). С 2021 года впервые поступившим на работу сотрудникам трудовая книжка оформляется только в электронном виде.
          </p>
          <ul className="vacancies__list">
            <li className="vacancies__list-item">Военный билет или иные документы воинского учета (для военнообязанных и подлежащих призыву);</li>
            <li className="vacancies__list-item">
              Диплом, сертификат об образовании, присвоенной квалификации (для исполнителей, которым по должности необходимы специальные знания и
              навыки);
            </li>
            <li className="vacancies__list-item">Свидетельство о прохождении курсового обучения в центре/школе профподготовки охраны;</li>
            <li className="vacancies__list-item">Свидетельство о присвоении квалификации частного охранника;</li>
            <li className="vacancies__list-item">УЛЧО (УЧО) – удостоверение личности частного охранника, лицензия охранника;</li>
            <li className="vacancies__list-item">
              Справку формы № 002-ОУ (устаревшая форма № 046-1) с медзаключением об отсутствии медицинских противопоказаний к владению оружием.
            </li>
          </ul>
          <p className="vacancies__text">
            К документам, которые требует наниматель в связи с неким особым статусом работника или особенностями деятельности, относятся:
          </p>
          <p className="vacancies__text">
            Охранник получает право носить и применять в случае необходимости оружие, поэтому он проходит Медицинское освидетельствование, чтобы
            подтвердить такое право (Приказ Минздрава от № 441н 30/06/2016).
          </p>
          <p className="vacancies__text">Рекомендуем иметь на руках ксерокопии всех вышеперечисленных документов.</p>
          <p className="vacancies__text">
            При утере или порче свидетельства об обучении, присвоении квалификации, УЛЧО и пр. частный охранник всегда может запросить их дубликаты в
            соответствующих структурах.
          </p>
          <p className="vacancies__text">Помимо этого, при трудоустройстве, сотрудник заполняет следующие бланки заявлений:</p>
          <ul className="vacancies__list">
            <li className="vacancies__list-item">Заявление о приёме на работу (пишется по форме организации собственноручно);</li>
            <li className="vacancies__list-item">Заявление о перечислении заработной платы;</li>
            <li className="vacancies__list-item">
              Иные заявления при трудоустройстве, необходимые для правильного формирования личного дела сотрудника.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Vacancies;
