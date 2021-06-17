import React from "react";
import Link from "next/link";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <span className={classes.textlogo}>
          Zira <span className={classes.dot}>.</span>
        </span>
        <span className={classes.subTextLogo}>Shipping Bar</span>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="#">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Plans and Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>FAQ and Video Tutorial</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
