import React from "react";
import { Link } from 'react-router-dom';

function Register() {

    return(
        <div className="register">
        <div className="register__container">
            <p className="register__title">Регистрация</p>
            <form className="register__form" name="register__form">
                <label className="register__form-field">
                <input
                    className="register__input register__input-email"
                    type="email"
                    name="email"
                    id="emailAddress"
                    placeholder="Email"
                    defaultValue=""
                    required=""
                    minLength={4}
                    maxLength={30}
                    // onChange={handleChangeName}
                />
                <span className="register__error-visible email-error-visible" />
                </label>
                <label className="register__form-field">
                    <input
                        className="register__input register__input-password"
                        type="password"
                        name="password"
                        id="userPassword"
                        placeholder="Пароль"
                        defaultValue=""
                        required=""
                        minLength={2}
                        maxLength={200}
                        // onChange={handleChangeDescription}
                    />
                    <span className="register__error-visible password-error-visible" />
                </label>
                <button
                    className="register__button-submit"
                    type="submit"
                    name="button-submit"
                    >
                    Зарегистрироваться
                </button>
                <p className="register__question">Уже зарегистрированы? <Link className="register__login-link" to='/sign-in' >Войти</Link></p>
            </form>
        </div>
    </div>
    );
}

export default Register