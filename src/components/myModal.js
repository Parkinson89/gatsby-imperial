import React from "react";
import "../styles/components/MyModal.scss";

const MyModal = ({ src, visible, setVisible }) => {
  const rootClasses = ["myModal"];

  if (visible) {
    rootClasses.push("myModal--active");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className="myModal__wrapper" onClick={(e) => e.stopPropagation()}>
        <img className="myModal__pic" src={src} alt="." />
      </div>
    </div>
  );
};

export default MyModal;
