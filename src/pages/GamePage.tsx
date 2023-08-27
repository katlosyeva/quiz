import { Fragment, useEffect } from "react";
import Logo from "../elements/Logo";
import PlayScreen from "../elements/PlayScreen";
import classes from "./GamePage.module.css";
// import { PlayerContext, iPlayerContext } from "../App";
import { useSelector } from "react-redux";
// import store, { userScore, userName } from "../store/userSlice";
import { userScore, userName } from "../store/index";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export interface IRoundContext {
  disableButton: boolean;
  setDisableButton: React.Dispatch<React.SetStateAction<boolean>>;
  answearIsChosen: boolean;
  setAnswearIsChosen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RoundContext = createContext<IRoundContext>({
  disableButton: false,
  setDisableButton: () => {},
  answearIsChosen: false,
  setAnswearIsChosen: () => {},
});
const genres = ["R&B", "JAZZ", "TECHNO", "SOUL"];

const GamePage = () => {
  const [answearIsChosen, setAnswearIsChosen] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const storageGenre = sessionStorage.getItem("genre");
  const [genre, setGenre] = useState(storageGenre ? storageGenre : "R&B");
  const [isError, setIsError] = useState(false);

  // const { name, score } = useContext<iPlayerContext>(PlayerContext);
  const name = useSelector(userName);
  const score = useSelector(userScore);
  const navigate = useNavigate();

  const setNextGenre = () => {
    if (genres.indexOf(genre) < 3) {
      setGenre(genres[genres.indexOf(genre) + 1]);
      // sessionStorage.setItem("genre", genres[genres.indexOf(genre) + 1]);
      setAnswearIsChosen(false);
      setDisableButton(true);
    } else {
      navigate("/results");
    }
  };

  return (
    <Fragment>
      {isError ? (
        <div className={classes.errorMessage}>
          We are sorry, the server does not respond. Try again later.
        </div>
      ) : (
        <RoundContext.Provider
          value={{
            disableButton,
            setDisableButton,
            answearIsChosen,
            setAnswearIsChosen,
          }}
        >
          <div className={classes.gamePageContainer}>
            <header>
              <Logo />
              <div className={classes.count}>
                <span className={classes.name}>{name.toUpperCase()}</span>
                <span data-testid="score" className={classes.score}>
                  Your score: {score}
                </span>
              </div>
            </header>

            <PlayScreen genre={genre} genres={genres} setIsError={setIsError} />
            <div className={classes.divWithButton}>
              <button
                disabled={disableButton}
                className={classes.nextQuestionButton}
                onClick={setNextGenre}
              >
                {genres.indexOf(genre) < 3 ? (
                  <span>NEXT QUESTION</span>
                ) : (
                  <span>SEE MY SCORE</span>
                )}
              </button>
            </div>
          </div>
        </RoundContext.Provider>
      )}
    </Fragment>
  );
};

export default GamePage;
