import React from "react";
import headerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <div>
      <header className={classes.header} onClick={props.onOpen}>
        <h1>React Restaurant</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Food" />
      </div>
    </div>
  );
}
