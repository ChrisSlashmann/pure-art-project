import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";
import './header.css';


function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"></div>
            <ul className="header__list">
                <li className="header__list-item">
                    <NavLink className="header__list-link" exact to="/">
                        Главная
                    </NavLink>
                </li>

                <li className="header__list-item">
                    <NavLink className="header__list-link" to='/counter'>
                        Счётчик
                    </NavLink>
                </li>

                <li className="header__list-item">
                    <NavLink className="header__list-link" to='/mess'>
                        Реализация 1
                    </NavLink>
                </li>

                <li className="header__list-item">
                    <NavLink className="header__list-link" to='/order'>
                        Реализация 2
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header;

