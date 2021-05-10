import Link from "next/link";
import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <h1>
          <a id="qa_logo_header">
            <img src="/images/sgm_logo.png" alt="SuperGoodMeetings" />
          </a>
        </h1>
      </Link>
      <ul className={styles.sessions}>
        <li class={styles.button}>
          <Link href="plan">
            <a id="ga_plan_header">プランと料金</a>
          </Link>
        </li>
        <li class={styles.button}>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
            <a target="_blank" id="ga_contact_header">
              お問い合わせ
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://sgms.app/login">
            <a id="ga_login_header">ログイン</a>
          </Link>
        </li>
        <li className={styles.signup_button}>
          <a href="https://sgms.app/signup" id="ga_signup_header">
            新規登録
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
