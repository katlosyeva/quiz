import React from "react";
import classes from "./WelcomePage.module.css";
import WelcomeForm from "../elements/WelcomeForm";
import Logo from "../elements/Logo";

function WelcomePage() {
  return (
    <div className={classes.welcomePageContainer}>
      <header className={classes.logo}>
        <Logo />
      </header>
      <WelcomeForm />
    </div>
  );
}
export default WelcomePage;
