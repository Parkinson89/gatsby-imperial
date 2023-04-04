import React from "react";
import "./NavLowerList.scss";
import { Link } from "gatsby";

function NavLowerList(props) {
  return (
    <>
      <ul className={props.startClassName}>
        {props.list.lowerLavelLinks.map((routeLower) => (
          <li className={"nav__lower-list-item " + props.modifier} key={routeLower.id}>
            <Link className="nav__lower-list-link" to={`${props.list.path}`} state={{ hash: routeLower.idName }}>
              {routeLower.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavLowerList;
