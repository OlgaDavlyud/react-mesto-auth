import React from 'react';
import logo from '../images/logo.png';

function Header() {
    return (
        <header className="header">
            <img
                className="header__logo"
                src={logo}
                alt="Место Россия - логотип проекта"
            />
        </header>
    );
}

export default Header