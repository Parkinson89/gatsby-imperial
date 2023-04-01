import * as React from "react"
import MyModal from "./myModal";
import "../styles/components/Slider.scss";

function Slider({
  modalExist,
  firstTitle,
  pics,
  className,
  id,
  mobileTranslate,
  mobileCountCenter,
}) {
  const [show, setShow] = React.useState(false);
  const [modalPic, setModalPic] = React.useState(0);
  const [width, setWidth] = React.useState(window.screen.availWidth);
  window.addEventListener("resize", () => {
    setWidth(window.screen.availWidth);
  });

  const debounce = (callback, timeoutDelay) => {
    let timeoutId;
    return (...rest) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
  };

  const [translateX, setTranslateX] = React.useState(0);
  const length = pics.length;
  let elementsBeforeCenter = 0;
  let elementsAfterCenter = 0;

  if (mobileCountCenter === 1 && width < 1200) {
    for (let i = 0; i < length; i++) {
      if (i < Math.floor(length / 2)) {
        elementsBeforeCenter += 1;
      } else if (i > Math.floor(length / 2)) {
        elementsAfterCenter += 1;
      }
    }
  } else {
    for (let i = 0; i < length; i++) {
      if (i < Math.floor(length / 2) - 1) {
        elementsBeforeCenter += 1;
      } else if (i > Math.floor(length / 2) + 1) {
        elementsAfterCenter += 1;
      }
    }
  }

  React.useEffect(() => {
    let defaultTranslate = 0;

    if (width < 1200) {
      defaultTranslate = mobileTranslate;
    } else {
      defaultTranslate = 310;
    }

    const buttonBack = document.getElementsByClassName(
      `slider__button--back slider__button--${className}`
    );
    const buttonNext = document.getElementsByClassName(
      `slider__button--next slider__button--${className}`
    );

    buttonBack[0].addEventListener(
      "click",
      debounce(() => {
        setTranslateX(translateX + defaultTranslate);
      }, 600),
      true
    );

    buttonNext[0].addEventListener(
      "click",
      debounce(() => {
        setTranslateX(translateX - defaultTranslate);
      }, 600),
      true
    );
  });

  React.useEffect(() => {
    let defaultTranslate = 0;

    if (width < 1200) {
      defaultTranslate = mobileTranslate;
    } else {
      defaultTranslate = 310;
    }

    if (translateX >= elementsBeforeCenter * defaultTranslate) {
      const button = document.getElementsByClassName(
        `slider__button--back slider__button--${className}`
      );
      button[0].disabled = true;
    } else if (translateX <= -(elementsAfterCenter * defaultTranslate)) {
      const button = document.getElementsByClassName(
        `slider__button--next slider__button--${className}`
      );
      button[0].disabled = true;
    } else {
      const buttonNext = document.getElementsByClassName(
        `slider__button--next slider__button--${className}`
      );
      if (buttonNext[0].disabled === true) {
        buttonNext[0].disabled = false;
      }
      const buttonBack = document.getElementsByClassName(
        `slider__button--back slider__button--${className}`
      );
      if (buttonBack[0].disabled === true) {
        buttonBack[0].disabled = false;
      }
    }
  }, [
    translateX,
    elementsAfterCenter,
    elementsBeforeCenter,
    width,
    className,
    mobileTranslate,
  ]);

  return (
    <div className="slider" id={id}>
      <h1 className="title--blue">{firstTitle}</h1>
      <div className="slider__main-wrapper">
        <button
          className={`slider__button slider__button--back slider__button--${className}`}
          type="button"
        >
          <svg
            className="slider__arrow slider__arrow--back slider__arrow--desktop slider__arrow--back-desktop"
            viewBox="0 0 32 143"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="slider__arrow-path"
              d="M0 130.35L4.72 142.937L31.3867 71.8255L4.72 0.714355L0 13.301L21.9467 71.8255L0 130.35Z"
              fill="none"
            />
          </svg>
          <svg
            className="slider__arrow slider__arrow--back slider__arrow--mobile slider__arrow--back-mobile"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="slider__arrow-path"
              d="M0 9L15 0.339745L15 17.6603L0 9Z"
              fill="#AFC5D9"
            />
          </svg>
          <span className="visually-hidden">назад</span>
        </button>
        <div
          className={`slider__list-wrapper slider__list-wrapper--background-${className}`}
        >
          <ul
            className={`slider__list ${className}__list`}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {pics.map((logo, index, pics) => {
              if (modalExist === true) {
                return (
                  <li
                    key={index}
                    className={`${className}__item`}
                    onClick={() => {
                      setModalPic(logo);
                      setShow(!show);
                    }}
                  >
                    <img
                      className={`${className}__pic`}
                      src={logo}
                      alt="Логотип компании"
                    />
                  </li>
                );
              } else {
                return (
                  <li key={index} className={`${className}__item`}>
                    <img
                      className={`${className}__pic`}
                      src={logo}
                      alt="Логотип компании"
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <button
          className={`slider__button slider__button--next slider__button--${className}`}
          type="button"
        >
          <svg
            className="slider__arrow slider__arrow--next slider__arrow--desktop slider__arrow--next-desktop"
            viewBox="0 0 32 143"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="slider__arrow-path"
              d="M0 130.35L4.72 142.937L31.3867 71.8255L4.72 0.714355L0 13.301L21.9467 71.8255L0 130.35Z"
              fill="none"
            />
          </svg>
          <svg
            className="slider__arrow slider__arrow--next slider__arrow--mobile slider__arrow--next-mobile"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="slider__arrow-path"
              d="M0 9L15 0.339745L15 17.6603L0 9Z"
              fill="#AFC5D9"
            />
          </svg>
          <span className="visually-hidden">вперед</span>
        </button>
      </div>
      <MyModal visible={show} setVisible={setShow} src={modalPic} />
    </div>
  );
}

export default Slider;
