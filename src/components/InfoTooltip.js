import React from "react";

function InfoTooltip({children, isOpen, onClose}){
    return(
        <div className={`popup popup-info-tooltip ${isOpen && 'popup_opened'}`}>
        <div className={`popup__info-tooltip-container`}>
            <button
                className="popup__button-close"
                type="reset"
                name="button-close"
                onClick={onClose}
            ></button>
            {children}
        </div>
  </div>
    );
}

export default InfoTooltip