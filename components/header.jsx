import Link from "next/link";
import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <img src="/images/sgm_logo.png" alt="SuperGoodMeetings" />
        <span>クローズドβ版</span>
      </h1>
      <ul className={styles.sessions}>
        <li>
          <Link href="https://supergoodmeetings.com/login">LOG IN</Link>
        </li>
        <li>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
            <a target="_blank">CONTACT US</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
