import Link from "next/link";
import styles from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <Link href="/">
          <a id="ga_logo_footer">
            <h1>
              <img src="/images/logo_mark.svg" alt="" />
            </h1>
          </a>
        </Link>
        <div className={styles.footer_navigation}>
          <ul>
            <li>
              <Link href="/#about">
                <a id="ga_about_footer">サービス紹介</a></Link>
            </li>
            <li>
              <Link href="/#interview">
                <a id="ga_interview_footer">インタビュー</a>
              </Link>
            </li>
            <li>
              <Link href="/#media">
                <a id="ga_media_footer">メディア掲載</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
                <a id="ga_contact_footer" target="_blank" rel="noopener">
                  お問い合わせ
                </a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a id="ga_posts_footer">お知らせ</a></Link>
            </li>
            <li>
              <Link href="
https://projectsprint.slack.com/join/shared_invite/zt-ne3rs685-PsoTjEhFs8skM_W8ePJduQ#/shared-invite/email">
                <a id="ga_usercommunity_footer" target="_blank" rel="noopener">
                  ユーザーコミュニティ
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UCOnbQVQNF5Q_7yjGZoNkFhw/">
                <a id="ga_youtube_footer" target="_blank" rel="noopener">
                  Youtube
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://note.com/sgms/m/m3633f7f797e5">
                <a id="ga_note_footer" target="_blank" rel="noopener">
                  Note
                </a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/privacy">
                <a id="ga_note_footer">プライバシーポリシー</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a id="ga_terms_footer">利用規約</a>
              </Link>
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
