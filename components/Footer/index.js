import React from "react";
import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <span className={classes.textlogo}>
          Zira <span className={classes.dot}>.</span>
        </span>
        <h6 className={classes.subTextLogo}>
          Copyright {new Date().getFullYear()}, All Right Reserverd
        </h6>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="#">
              <a>Term of Services</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Cookie Policy</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
