import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
const Footer: React.FC = () => {
  const yeareDate: Date = new Date();
  const thisYear: number = yeareDate.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mazine Suliman </h1>

        <ul className="footer__list">
          <li>
            <Link
              to="about"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="qualification"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Qualifications
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/mazine-s-suliman/"
            target={"_blank"}
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Mazzaleen"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://medium.com/@mazine_suliman"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-medium"></i>
          </a>
          {/* <a
            href="https://twitter.com/amazzaleen"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a> */}
        </div>
    <span className="footer__copy">
      &copy; {thisYear} Mazine <br />
          Crafted with code, a touch of salt, and a love for 🐧
    </span>
      </div>
    </footer>
  );
};

export default Footer;
