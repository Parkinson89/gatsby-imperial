import React from "react";
import { Script } from "gatsby";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      <Header />
      <main>{children}</main>
      <Footer />
      <Script src="https://cdn.envybox.io/widget/cbk.js?wcb_code=7900969cfd40eab2deccdffa56bc6b3c" type="text/javascript" charset="UTF-8" async />
    </>
  );
};

export default Layout;
