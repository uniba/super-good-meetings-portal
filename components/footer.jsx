import Link from "next/link";
import styles from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <Link href="/">
          <a>
            <h1>
              <img src="/images/logo_mark.svg" alt="" />
            </h1>
          </a>
        </Link>
        <div className={styles.footer_navigation}>
          <ul>
            <li>
              <Link href="/#about">サービス紹介</Link>
            </li>
            <li>
              <Link href="/#interview">
                インタビュー
              </Link>
            </li>
            <li>
              <Link href="/#media">メディア掲載</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
                <a target="_blank" rel="noopener">
                  お問い合わせ
                </a>
              </Link>
            </li>
            <li>
              <Link href="/posts">お知らせ</Link>
            </li>
            <li>
              <Link href="http://slack.projectsprint.org/">
                <a target="_blank" rel="noopener">
                  ユーザーコミュニティ
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UCOnbQVQNF5Q_7yjGZoNkFhw/">
                <a target="_blank" rel="noopener">
                  Youtube
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://note.com/sgms/m/m3633f7f797e5">
                <a target="_blank" rel="noopener">
                  Note
                </a>
              </Link>
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
        Developed by
        <br />
        <a href="https://copilot.jp/" target="_blank" rel="noopener">
          COPILOT Inc.
        </a>
        &nbsp;+&nbsp;
        <a href="https://uniba.jp/" target="_blank" rel="noopener">
          UNIBA Inc.
        </a>
        &nbsp;Project Sprint Team.
      </address>
    </div>
  );
};

export default Footer;
