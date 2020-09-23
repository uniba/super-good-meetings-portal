import Footer from "./footer";
import styles from "./layout.module.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
