import React from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
