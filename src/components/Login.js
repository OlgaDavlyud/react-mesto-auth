import React from 'react';

function Login() {

    return(
        <div className="login">
            <div className="login__container">
                <p className="login__title">Вход</p>
                <form className="login__form" name="login__form">
                    <label className="login__form-field">
                    <input
                        className="login__input login__input-email"
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
                    <span className="login__error-visible email-error-visible" />
                    </label>
                    <label className="login__form-field">
                        <input
                            className="login__input login__input-password"
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
                        <span className="login__error-visible password-error-visible" />
                    </label>
                    <button
                        className="login__button-submit"
                        type="submit"
                        name="button-submit"
                        >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login