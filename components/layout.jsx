import Footer from "./footer";
const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
