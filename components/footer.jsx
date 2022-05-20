import Link from "next/link";
import styles from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <Link href="/">
          <a id="qa_logo_footer">
            <h1>
              <img src="/images/logo_mark.svg" alt="" />
            </h1>
          </a>
        </Link>
        <div className={styles.footer_navigation}>
          <ul>
            <li>
              <Link href="/#about">
                <a id="ga_about_footer">サービス紹介</a>
              </Link>
              <Link href="/src/SuperGoodMeetings_introduction.pdf">
                <a id="ga_intropdf_footer"  target="_blank" className={styles.footer_sublink}>
                  PDF版ダウンロード
                </a>
              </Link>
            </li>
            <li>
              <Link href="/plan">
                <a id="ga_plan_footer">プランと料金</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a id="ga_posts_footer">お知らせ</a>
              </Link>
            </li>
            <li>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
                <a id="ga_contact_footer" target="_blank" rel="noopener">
                  お問い合わせ
                </a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/#interview">
                <a id="ga_interview_footer">活用事例</a>
              </Link>
            </li>
            <li>
              <Link href="/#media">
                <a id="ga_media_footer">メディア掲載</a>
              </Link>
            </li>
            <li>
              <Link href="https://sites.google.com/copilot.jp/support-sgms/">
                <a id="ga_userguide_footer">ガイドページ</a>
              </Link>
            </li>
            <li>
              <Link href="https://slack.projectsprint.org/">
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
                <a id="ga_privacy_footer">プライバシーポリシー</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a id="ga_terms_footer">利用規約</a>
              </Link>
            </li>
            <li>
              <Link href="/law">
                <a id="ga_law_footer">特定商取引法に基づく表示</a>
              </Link>
            </li>
            <li>
              <Link href="/security">
                <a id="ga_security_footer">セキュリティホワイトペーパー</a>
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
