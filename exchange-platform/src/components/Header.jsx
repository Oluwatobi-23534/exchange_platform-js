import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
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
          Company Logo <span class="nav__logo--highlight">.</span>
        </Link>
      </div>
      <ul
        class={`nav__links ${isOpen ? "nav__links--open" : ""}`}
        id="menuLinks"
      >
        <li class="nav__item">
          <Link to="/" class="nav__link">
            Home
          </Link>
        </li>
        <li class="nav__item">
          <Link to="/dashboard" class="nav__link">
            Dashboard
          </Link>
        </li>
        <li class="nav__item">
          <Link to="/markets" class="nav__link">
            Markets
          </Link>
        </li>
      </ul>
      <div class={`nav__icons ${isOpen ? "nav__icons--open" : ""}`}>
        <span class="nav__icon">
          <Link class="nav__link">
            <i class="bi bi-search"></i>
          </Link>
        </span>
        <span class="nav__icon">
          <Link class="nav__link">
            <i class="bi bi-person-circle"></i>
          </Link>
        </span>
        <span class="nav__icon">
          <Link class="nav__link">
            <i class="bi bi-wallet-fill"></i>
          </Link>
        </span>
        <span class="nav__icon">
          <Link class="nav__link">
            <i class="bi bi-box-arrow-in-right"></i>
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
