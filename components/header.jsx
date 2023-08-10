import React from "react";
import Link from "next/link";
import Modal from "react-modal";
import styles from "./styles/header.module.scss";

Modal.setAppElement("#__next");

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return <>
    <div className={styles.header}>
      <Link href="/" legacyBehavior>
        <h1>
          <a id="qa_logo_header">
            <img src="/images/sgm_logo.png" alt="SuperGoodMeetings" />
          </a>
        </h1>
      </Link>
      <ul className={styles.sessions}>
        <li className={styles.button}>
          <Link href="/plan" id="ga_plan_header">
            プランと料金
          </Link>
        </li>
        <li className={styles.button}>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScCyzYCVpWlBvP6wIDY8_RiWEb5zFt2GHzIB4Jvi8ccWkm9Gw/viewform"
            target="_blank"
            id="ga_contact_header">
            
              お問い合わせ
            
          </Link>
        </li>
        <li>
          <Link href="https://sgms.app/login" id="ga_login_header">
            ログイン
          </Link>
        </li>
        <li className={styles.signup_button}>
          <a href="https://sgms.app/signup" id="ga_signup_header">
            無料で始める
          </a>
        </li>
      </ul>
      <button onClick={() => setIsOpen(true)} className={styles.hamburger}>
        <img src="/images/icon_hambuger.svg" />
      </button>
    </div>
    <Modal
      isOpen={modalIsOpen}
      preventScroll={true}
      onRequestClose={() => setIsOpen(false)}
      className={styles.modal_content}
      overlayClassName={{
        base: styles.modal_overlay_base,
        afterOpen: styles.modal_overlay_after,
        beforeClose: styles.modal_overlay_before,
      }}
      closeTimeoutMS={500}
    >
      <button onClick={() => setIsOpen(false)}>
        <img src="/images/icon_close.svg" />
      </button>
      <ul>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/#about" id="ga_plan_header">
            サービス紹介
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/plan" id="ga_plan_header">
            プランと料金
          </Link>
        </li>

        <li>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScCyzYCVpWlBvP6wIDY8_RiWEb5zFt2GHzIB4Jvi8ccWkm9Gw/viewform"
            target="_blank"
            id="ga_contact_header">
            
              お問い合わせ
            
          </Link>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <Link href="https://sgms.app/login" id="ga_login_header">
            ログイン
          </Link>
        </li>
        <li>
          <a href="https://sgms.app/signup" id="ga_signup_header">
            無料で始める
          </a>
        </li>
      </ul>
    </Modal>
  </>;
};

export default Header;
