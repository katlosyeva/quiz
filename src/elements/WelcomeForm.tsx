import React from "react";
import classes from "./WelcomeForm.module.css";
import { useState } from "react";
// import { PlayerContext, iPlayerContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../store/index";
import { setName } from "../store/userSlice";

function WelcomeForm() {
  const [nameIsEntered, setNameIsEntered] = useState(false);
  // const { setName } = useContext<iPlayerContext>(PlayerContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/game");
  };
  const setPlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1) {
      dispatch(setName(e.target.value));
      sessionStorage.setItem("name", e.target.value);
      setNameIsEntered(true);
    }
  };

  return (
    <div className={classes.welcomeForm}>
      <div className={classes.welcomeForm__header}>
        <h1>Welcome!</h1>
        <p>Please enter your name and lets start our quiz! </p>
      </div>

      <input
        placeholder="Type your name here..."
        type="text"
        onChange={setPlayerName}
      />
      <button
        data-role="submit_button"
        className={classes.welcomeForm__button}
        disabled={!nameIsEntered}
        type="submit"
        onClick={navigationHandler}
      >
        <span>Start quiz</span>
      </button>
    </div>
  );
}
export default WelcomeForm;
