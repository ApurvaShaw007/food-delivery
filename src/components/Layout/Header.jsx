import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsImage from "../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="food image" />
      </div>
    </Fragment>
  );
}

export default Header;
