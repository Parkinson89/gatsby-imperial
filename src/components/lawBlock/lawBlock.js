import React from "react";
import "./LawBlock.scss";
import { OL_SERVICES } from "@data";

function LawBlock() {
  return (
    <div className="law-block">
      <p className="law-text">В перечень услуг, регламентируемых ст. 3 ФЗ «О частной детективной и охранной деятельности в РФ», входят:</p>
      <ul className="law-list">
        {OL_SERVICES.map((item, index) => (
          <li key={index} className="law-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LawBlock;
