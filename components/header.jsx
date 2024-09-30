import Image from "next/image";
import Link from "next/link";
import React from "react";
import Modal from "react-modal";
import styles from "./styles/header.module.scss";

Modal.setAppElement("#__next");

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className={styles.header}>
        <h1>
          <Link href="/" legacyBehavior>
            <a id="qa_logo_header">
              <Image
                className={styles.img}
                src="/images/sgm_logo.png"
                alt="SuperGoodMeetings"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </h1>
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
              id="ga_contact_header"
            >
              お問い合わせ
            </Link>
          </li>
          <li className={styles.button}>
            <Link href="/news" id="ga_contact_header">
              お知らせ
            </Link>
          </li>
          <li className={styles.button}>
            <Link
              href="https://docs.google.com/document/d/1CwJQ9hysAZbJRahUdwtPCzMqDVB8bdY6sCW5tPPXWPc/"
              target="_blank"
              id="ga_contact_header"
            >
              操作ガイド
            </Link>
          </li>
          <li>
            <Link
              className={styles.login_button}
              href="https://sgms.app/login"
              id="ga_login_header"
            >
              ログイン
            </Link>
          </li>
          <li>
            <Link
              className={styles.signup_button}
              href="https://sgms.app/signup"
              id="ga_signup_header"
            >
              無料で始める
            </Link>
          </li>
        </ul>
        <button onClick={() => setIsOpen(true)} className={styles.hamburger}>
          <div>
            <Image
              className={styles.img}
              src="/images/icon_hambuger.svg"
              alt="hamburger menu"
              layout="fill"
              objectFit="contain"
            />
          </div>
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
          <div>
            <Image
              className={styles.img}
              src="/images/icon_close.svg"
              alt="close"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </button>
        <ul className={styles.menu_list}>
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
              id="ga_contact_header"
            >
              お問い合わせ
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/news" id="ga_contact_header">
              お知らせ
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link
              href="https://docs.google.com/document/d/1CwJQ9hysAZbJRahUdwtPCzMqDVB8bdY6sCW5tPPXWPc/"
              id="ga_contact_header"
              target="_blank"
            >
              操作ガイド
            </Link>
          </li>
        </ul>
        <ul className={styles.auth_list}>
          <li>
            <Link
              className={styles.login_button}
              href="https://sgms.app/login"
              id="ga_login_header"
            >
              ログイン
            </Link>
          </li>
          <li>
            <a
              className={styles.signup_button}
              href="https://sgms.app/signup"
              id="ga_signup_header"
            >
              無料で始める
            </a>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default Header;
