import styles from "../Styles/Navbar.module.css";
import { NavbarItem } from "../interfaces";
import { navbarItems } from "../utils/sample-data";

import Link from "next/link";
// import { useState } from "react";

const Navbar = () => {
  // const [login, setLogin] = useState(false);
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.section1}>
          <Link href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0567/6033/6539/files/IMG-0970_180x.png?v=1621332751"
              width="40px"
              alt="navbarlogo"
              className={styles.section1logo}
            />
          </Link>
        </div>
        <div className={styles.section2}>
          <ul className={styles.Navbar_list}>
            {navbarItems.map((item: NavbarItem) => {
              return (
                <li
                  key={item.id}
                  className={`${
                    item.isActive
                      ? `${styles.Navbar_item_active}`
                      : `${styles.Navbar_item}`
                  }`}
                >
                  <Link href={`/${item.link}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.section3}>
          <ul className={styles.Navbar_list}>
            <li className={styles.Navbar_list_right}>
              <i className="fas fa-search"></i>
            </li>
            <li className={styles.Navbar_list_right}>
              <i className="fas fa-user"></i>
            </li>
            <li className={styles.Navbar_list_right}>
              <i className="fas fa-shopping-bag"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
