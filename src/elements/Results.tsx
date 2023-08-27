import React from "react";
import classes from "./Results.module.css";
// import { iPlayerContext, PlayerContext } from "../App";

// import { userActions } from "../store/index";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  setScore } from "../store/userSlice";
import { userScore, userName } from "../store/index"

const Results = () => {
  // const { name, score, setScore } =
  //   React.useContext<iPlayerContext>(PlayerContext);
  const dispatch = useDispatch();
  const name = useSelector(userName);
  const score = useSelector(userScore);
  const navigate = useNavigate();
  const setNextGameHandler = () => {
    navigate("/game");
    dispatch(setScore(0));
    sessionStorage.removeItem("score");
    sessionStorage.removeItem("genre");
  };

  return (
    <div className={classes.results}>
      <div className={classes.image}>
        <img src="../assets/images/Union.png" alt="decoration" />
      </div>
      <div className={classes.score}>
        <div>{score}</div>
      </div>
      <div className={classes.resultsDescription}>
        {score === 12 ? (
          <h1 className={classes.feedback}>
            {name.toUpperCase()}, you did so great!
          </h1>
        ) : (
          <h1 className={classes.feedback}>
            {name.toUpperCase()}, you can do better, try again
          </h1>
        )}
        {score === 12 ? (
          <p>
            You got {score} out of 12 points. You are definitely a music lover!
          </p>
        ) : (
          <p>You got {score} out of 12 points.</p>
        )}

        <button
          className={classes.results__button}
          onClick={setNextGameHandler}
        >
          <span>TRY AGAIN</span>
        </button>
      </div>
    </div>
  );
};
export default Results;
