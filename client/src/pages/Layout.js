import React from "react";
import NavBar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar username="none" />

      <div className="container">
        <h1 className="heading">Welcome to Electron</h1>

        {children}
      </div>
    </>
  );
};

export default Layout;
