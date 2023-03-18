import React from "react";

function InfoTooltip({text, src, alt, isOpen, onClose, loggedIn}){
  return(
    <div className={`popup popup-info-tooltip ${isOpen && 'popup_opened'}`}>
        <div className={`popup__info-tooltip-container`}>
            <button
                className="popup__button-close"
                type="reset"
                name="button-close"
                onClick={onClose}
            ></button>
            <div className="popup__info-tooltip-form">
            <img className="popup__tooltip-image" src={src} alt={alt} />
            <p className="popup__text-info-tooltip">{loggedIn ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
          </div>
        </div>
    </div>
  );
}

export default InfoTooltip