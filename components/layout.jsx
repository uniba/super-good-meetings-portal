import Header from "./header";
import Footer from "./footer";
import styles from "./styles/layout.module.scss";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
