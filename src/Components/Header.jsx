import React from "react";
import classes from "./Header.module.css";
import { Outlet } from "react-router-dom";
function Header() {
  return (
    <>
      <div className={classes.container}>
        <img src="src/assets/cover.jpeg" alt="" />
        <div className={classes.title}>
          <h2>Welcome</h2>
          <h3>Millions of Movies to discover.</h3>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
