import Link from "next/link";
import styles from "../Styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.footer_s1}>
          <p>Newsletter</p>
          <input
            className={styles.footer_s1input}
            type="text"
            placeholder="Email Address"
          />
          <button className={styles.footer_s1btn}>SUBSCRIBE</button>
        </div>
        <div className={styles.footer_s2}>
          <p>Quick links</p>
          <ul className={styles.Footer_list}>
            <li className={styles.Footer_list_item}>
              <Link href="/Search">Search</Link>
            </li>
            <li className={styles.Footer_list_item}>
              <Link href="/Terms&Conditions">Terms & Conditions</Link>
            </li>
            <li className={styles.Footer_list_item}>
              <Link href="/StorePolicy">Store Policy</Link>
            </li>
            <li className={styles.Footer_list_item}>
              <Link href="/PrivacyPolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.Footer_bottom}>
        <i className="fab fa-instagram"></i>
        <p>© 2021, ShiThrone</p>
      </div>
    </>
  );
}

export default Footer;
