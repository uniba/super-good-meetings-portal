import Link from "next/link";
import styles from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <h1>
          <img src="/images/logo_mark.svg" alt="" />
        </h1>
        <div className={styles.footer_navigation}>
          <ul>
            <li>
              <Link href="https://supergoodmeetings.com/login">
                サービス紹介
              </Link>
            </li>
            <li>
              <Link href="https://supergoodmeetings.com/login">
                お問い合わせ
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="https://supergoodmeetings.com/login">
                ユーザーコミュニティ
              </Link>
            </li>
            <li>
              <Link href="https://supergoodmeetings.com/login">YouTube</Link>
            </li>
            <li>
              <Link href="https://supergoodmeetings.com/login">Note</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/privacy">プライバシーポリシー</Link>
            </li>
            <li>
              <Link href="/terms">利用規約</Link>
            </li>
          </ul>
        </div>
      </div>
      <address>
        Copyright &copy; 2020 &nbsp;
        <a href="https://copilot.jp/" target="_blank" rel="noopener">
          COPILOT Inc.
        </a>
        &nbsp; All Rights Reserved.
        <br />
        Developed by <span className={styles.sp}></span> COPILOT Inc. + UNIBA
        INC. Project Sprint Team.
      </address>
    </div>
  );
};

export default Footer;
