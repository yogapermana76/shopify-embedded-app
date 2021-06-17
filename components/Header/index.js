import React from "react";
import Link from "next/link";
import { Dashboard, MonetizationOn, Ballot } from "@material-ui/icons";
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
              <a>
                <span>
                  <Dashboard />
                </span>
                <span className={classes.menuTitle}>Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <span>
                  <MonetizationOn />
                </span>
                <span className={classes.menuTitle}>Plans and Pricing</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <span>
                  <Ballot />
                </span>
                <span className={classes.menuTitle}>
                  FAQ and Video Tutorial
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
