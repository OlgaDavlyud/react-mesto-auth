import React from "react";
import { Routes, Route } from "react-router-dom";
import done from "../images/done.svg";
import error from "../images/error.svg";

function InfoTooltip(onClose){
    return(
        <div className={`popup popup-info-tooltip`}>
        <div className={`popup__info-tooltip-container`}>
            <button
                className="popup__button-close"
                type="reset"
                name="button-close"
                // onClick={onClose}
            ></button>
            <Routes>
                <Route path="/sign-up" element={
                    <div className={`popup__info-tooltip-form`}>
                        <img
                            className="popup__tooltip-image"
                            src={done}
                            alt="Выполнено"
                        />
                        <p className="popup__text-info-tooltip">Вы успешно зарегистрировались!</p>
                    </div>}>
                </Route>
                <Route path="/sign-up" element={
                    <div className={`popup__info-tooltip-form`}>
                        <img
                            className="popup__tooltip-image"
                            src={error}
                            alt="Ошибка"
                        />
                        <p className="popup__text-info-tooltip">Что-то пошло не так!
                        Попробуйте ещё раз.</p>
                    </div>}>
                </Route>
            </Routes>
        </div>
  </div>
    );
}

export default InfoTooltip