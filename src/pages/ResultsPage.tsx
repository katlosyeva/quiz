import React from "react";
import classes from "./ResultsPage.module.css";
import Results from "../elements/Results";
import Logo from "../elements/Logo";

function ResultsPage() {
  return (
    <div className={classes.resultsPageContainer}>
      <header className={classes.logo}>
        <Logo />
      </header>
      <Results />
    </div>
  );
}
export default ResultsPage;
