import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav class="nav">
      <div class="nav__logo">
        <Link to="/" class="nav__link">
          Company Logo
        </Link>
      </div>
      <div class="nav__divider"></div>
      <ul class="nav__links" id="menuLinks">
        <li class="nav__item">
          <Link to="/" class="nav__link">
            Exchange
          </Link>
        </li>
        <li class="nav__item">
          <Link to="/dashboard" class="nav__link">
            Wallet
          </Link>
        </li>
        <li class="nav__item">
          <Link to="/markets" class="nav__link">
            Hub
          </Link>
        </li>
      </ul>
      <div class="nav__search">
        <input type="text" class="nav__search-input" placeholder="Search..." />
        <span class="search__icon">
          <Link class="nav__link">
            <i class="bi bi-search"></i>
          </Link>
        </span>
      </div>

      <div class={`nav__icons ${isOpen ? "nav__icons--open" : ""}`}>
        <div class="nav__user">
          <span class="nav__icon">
            <Link class="nav__link">
              <i class="bi bi-person-circle"></i>
            </Link>
          </span>
          <span class="nav__username">Username</span>
          <Link class="nav__link">
            <i class="bi bi-chevron-right"></i>
          </Link>
        </div>
        <span class="nav__icon">
          <Link class="nav__link">
            <i class="bi bi-globe"></i>
          </Link>
        </span>
        <span class="nav__icon">
          <Link class="nav__link">
            <i class="bi bi-box-arrow-in-left"></i>
          </Link>
        </span>
      </div>

      <div class="nav__menu-icon" onClick={toggleMenu}>
        <i class={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
      </div>
    </nav>
  );
};

export default Header;
