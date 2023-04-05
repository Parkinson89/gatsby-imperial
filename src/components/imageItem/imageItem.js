import React from "react";

const ImageItem = ({ className, logo, setModalPic, setShow }) => {
  return (
    <li
      className={`${className}__item`}
      onClick={() => {
        if (setModalPic && setShow) {
          console.log(2);
          setModalPic(logo);
          setShow(true);
        }
      }}
    >
      <img className={`${className}__pic`} src={logo} alt="Логотип компании." />
    </li>
  );
};

export default ImageItem;
