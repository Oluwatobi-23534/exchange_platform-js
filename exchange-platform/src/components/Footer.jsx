import React from 'react'
import { Link } from 'react-router-dom';
import "../index.css";

const Footer = () => {
  return (
    <footer class="footer">
      <hr />
      <div class="footer__content">
        <div class="footer__links">
          <h3 class="footer__title">Quick Links</h3>
          <div class="footer__row">
            <Link to="/" class="footer__link">
              Home
            </Link>
            <Link to="/dashboard" class="footer__link">
              Dashboard
            </Link>
            <Link to="/markets" class="footer__link">
              Markets
            </Link>
          </div>
        </div>
        <div class="footer__contact">
          <h3 class="footer__title">Contact Us</h3>
          <form class="footer__form">
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your message"></textarea>
            <button type="submit" class="footer__button">
              Submit
            </button>
          </form>
        </div>
        <div class="footer__social">
          <h3 class="footer__title">Follow Us</h3>
          <div class="footer__row">
            <Link class="footer__icon">
              <i class="bi bi-facebook"></i>
            </Link>
            <Link class="footer__icon">
              <i class="bi bi-twitter"></i>
            </Link>
            <Link class="footer__icon">
              <i class="bi bi-instagram"></i>
            </Link>
            <Link class="footer__icon">
              <i class="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer