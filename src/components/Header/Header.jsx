import React, { useState } from "react";
import { Link } from "react-router-dom";

import bookIcon from "../../assets/images/book-icon.png";
import shoppingIcon from "../../assets/images/shopping-icon.png";
import sentenceIcon from "../../assets/images/sentence-bg.png";

import "./header.css";

export default function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  const preventClose = (event) => {
    event.stopPropagation();
  };

  return (
    <header className="header">
      <div className={"header__body"}>
        <div className="header__top">
          <div className="header__brand">
            <Link to={"/"}>
              <img
                className="header__book-icon"
                src={bookIcon}
                alt="bookIcon"
              />
              <h2 className="header__brand-text">Booktopia</h2>
            </Link>
          </div>

          <ul className="header__navbar">
            <Link to="/">
              <li className="header__nav-item">Главная</li>
            </Link>
            <Link to="/catalog">
              <li className="header__nav-item">Каталог</li>
            </Link>
            <Link to="/contacts">
              <li className="header__nav-item">Контакты</li>
            </Link>
            <Link to="/aboutUs">
              <li className="header__nav-item">О Нас</li>
            </Link>
          </ul>

          <div className="header__shopping">
            <Link to={"/shopping"} className="header__shopping-link">
              <img
                className="header__shopping-icon"
                src={shoppingIcon}
                alt="shoppingIcon"
              />{" "}
              Корзина
            </Link>
          </div>
          <div className="header__burger-menu-icon" onClick={toggleBurgerMenu}>
            &#9776;
          </div>
        </div>
        <div className="header__main">
          <div className="header__sentence">
            <img
              className="header__sentence-icon"
              src={sentenceIcon}
              alt="sentenceIcon"
            />
          </div>
          <div className="header__info">
            <div className="header__hr"></div>

            <div className="header__text">
              <div className="header__blur"></div>

              <h3 className="header__description">
                Погрузитесь в мир слов вместе с нами. Откройте дверь в<br />
                увлекательные истории, глубокие мысли и удивительные миры,
                <br />
                ожидающие вас на страницах книг. Мы стремимся создать
                <br />
                пространство, где каждый читатель может наслаждаться
                <br />
                уникальным опытом чтения и делиться своими впечатлениями
                <br />с другими
              </h3>
            </div>
          </div>
        </div>
        <div
          onClick={closeBurgerMenu}
          className={`header__burger-menu ${burgerMenuOpen ? "active" : ""}`}
        >
          <div onClick={preventClose} className="header__burger-body">
            <div onClick={closeBurgerMenu} className="header__burger-close">&#x2716;</div>

            <div className="header__brand">
              <Link to={"/"}>
                <img
                  className="header__book-icon"
                  src={bookIcon}
                  alt="bookIcon"
                />
                <h2 className="header__brand-text">Booktopia</h2>
              </Link>
            </div>

            <ul className="header__navbar">
              <Link onClick={closeBurgerMenu}  to="/">
                <li className="header__nav-item">Главная</li>
              </Link>
              <Link onClick={closeBurgerMenu}  to="/catalog">
                <li className="header__nav-item">Каталог</li>
              </Link>
              <Link onClick={closeBurgerMenu}  to="/contacts">
                <li className="header__nav-item">Контакты</li>
              </Link>
              <Link onClick={closeBurgerMenu}  to="/aboutUs">
                <li className="header__nav-item">О Нас</li>
              </Link>
            </ul>

            <div className="header__shopping">
              <Link to={"/shopping"} onClick={closeBurgerMenu} className="header__shopping-link">
                <img
                  className="header__shopping-icon"
                  src={shoppingIcon}
                  alt="shoppingIcon"
                />{" "}
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
