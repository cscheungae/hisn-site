import React, { Fragment } from "react";
import Header from "./header";

import "../styles/normalize.scss";
import "./layout.scss";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);

export default Layout;
