import Link from "next/link";
import styles from "./styles/footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <h1>
          <Link href="/" id="qa_logo_footer">
            <Image
              className={styles.img}
              src="/images/logo_mark.svg"
              alt="SuperGoodMeetings ロゴ"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </h1>
        <div className={styles.footer_navigation}>
          <ul>
            <li>
              <Link href="/#about" id="ga_about_footer">
                サービス紹介
              </Link>
            </li>
            <li>
              <Link href="/plan" id="ga_plan_footer">
                プランと料金
              </Link>
            </li>
            <li>
              <Link href="/news" id="ga_posts_footer">
                お知らせ
              </Link>
            </li>
            <li>
              <Link href="/release_notes" id="ga_posts_footer">
                リリースノート
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScCyzYCVpWlBvP6wIDY8_RiWEb5zFt2GHzIB4Jvi8ccWkm9Gw/viewform"
                id="ga_contact_footer"
                target="_blank"
                rel="noopener"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/works" id="ga_interview_footer">
                活用事例
              </Link>
            </li>
            <li>
              <Link href="/#media" id="ga_media_footer">
                メディア掲載
              </Link>
            </li>
            <li>
              <Link
                href="https://sites.google.com/copilot.jp/support-sgms/"
                id="ga_userguide_footer"
                target="_blank"
              >
                操作ガイド
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                href="https://copilot.jp/privacy-policy/"
                target="_blank"
                rel="noopener"
                id="ga_privacy_footer"
              >
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" id="ga_terms_footer">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/law" id="ga_law_footer">
                特定商取引法に基づく表示
              </Link>
            </li>
            <li>
              <Link href="/security" id="ga_security_footer">
                セキュリティホワイトペーパー
              </Link>
            </li>
            <li>
              <Link
                href="https://sgms.app/userdata_external_transmission"
                id="ga_userdata_footer"
                target="_blank"
                rel="noopener"
              >
                利用者情報の外部送信について
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
