import React from "react";
// import error from "../images/error.svg";

function InfoTooltip(src, text, alt){
    return(
        <div className={`popup popup-info-tooltip`}>
        <div className={`popup__info-tooltip-container`}>
            <button
                className="popup__button-close"
                type="reset"
                name="button-close"
            ></button>
                    <div className={`popup__info-tooltip-form`}>
                        <img
                            className="popup__tooltip-image"
                            src={src}
                            alt={alt}
                        />
                        <p className="popup__text-info-tooltip">{text}</p>
                    </div>
                    {/* <div className={`popup__info-tooltip-form`}>
                        <img
                            className="popup__tooltip-image"
                            src={error}
                            alt="Ошибка"
                        />
                        <p className="popup__text-info-tooltip">Что-то пошло не так!
                        Попробуйте ещё раз.</p>
                    </div> */}
        </div>
  </div>
    );
}

export default InfoTooltip