import React from "react";
import "./NavLowerList.scss";
import { Link } from "gatsby";

function NavLowerList({ list, modifier, startClassName }) {
  return (
    <>
      <ul className={startClassName}>
        {list.lowerLevelLinks.map((routeLower) => (
          <li className={"nav__lower-list-item " + modifier} key={routeLower.id}>
            <Link className="nav__lower-list-link" to={`${list.path}`} state={{ hash: routeLower.idName }}>
              {routeLower.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavLowerList;
