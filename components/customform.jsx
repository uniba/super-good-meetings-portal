import { useRef } from "react";
import styles from "../pages/styles/landing.module.scss";

const CustomForm = ({ status, message, onValidated }) => {
  const emailRef = useRef(null);
  const submit = () => {
    const email = emailRef.current;
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  };

  return (
    <div className={styles.submit_area}>
      {status === "sending" && (
        <div className={styles.submit_area_text}>送信中...</div>
      )}
      {status === "error" && (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className={styles.submit_area_text}
        />
      )}
      {status === "success" && (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className={styles.submit_area_text}
        />
      )}
      <input
        ref={emailRef}
        type="email"
        placeholder="Eメールアドレスを入力してください"
      />
      <button onClick={submit}>登録する</button>
    </div>
  );
};

export default CustomForm;
