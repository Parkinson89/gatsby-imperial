import React from "react";

import "./SlideShow.scss";

function SlideShow({ items, classNameModify }) {
  return (
    <div className={"slideshow " + classNameModify}>
      {items.map((item) => (
        <div key={item.id} className="slideshow-image" style={{ backgroundImage: `url('${item.pic}')` }}></div>
      ))}
    </div>
  );
}

export default SlideShow;
