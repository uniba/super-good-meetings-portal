
import styles from "../pages/styles/landing.module.scss";

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  
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
          ref={(node) => (email = node)}
          type="email"
          placeholder="Eメールアドレスを入力してください"
        />
        <br />
        <button onClick={submit}>登録する</button>
      </div>
    );
  };

  export default CustomForm;