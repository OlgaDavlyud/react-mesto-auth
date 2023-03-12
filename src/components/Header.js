import React from 'react';
import logo from '../images/logo.png';
// import { Routes, Route } from 'react-router-dom';

function Header(email) {
    return (
        <header className="header">
            <img
                className="header__logo"
                src={logo}
                alt="Место Россия - логотип проекта"
            />
            {/* <Routes>
              <Route exact path="/">
                <div className="header__wrapper">
                  <p className="header__user">{ email }</p>
                  <button className="header__logout">Выйти</button>
                </div>
              </Route>
              <Route path="/sign-up">
                <Link className="header__auth-link" to="sign-in">Войти</Link>
              </Route>
              <Route path="/sign-in">
                <Link className="header__auth-link" to="sign-up">Регистрация</Link>
              </Route>
            </Routes> */}
        </header>
    );
}

export default Header