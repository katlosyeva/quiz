import React, { useEffect, useState } from "react";
import "./QuestionBlock.css";
import Audioplayer from "./Audioplayer";
import { Genre } from "../interfaces/interfaces";
// import { PlayerContext, iPlayerContext } from "../App";
import { RoundContext, IRoundContext } from "../pages/GamePage";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../store/userSlice";
import { userScore } from "../store/index";

const QuestionBlock: React.FC<{
  option: Genre;
  setIdChosen: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  // const { setScore } = useContext<iPlayerContext>(PlayerContext);
  const dispatch = useDispatch();
  const score = useSelector(userScore);
  const { setDisableButton, setAnswearIsChosen, answearIsChosen } =
    useContext<IRoundContext>(RoundContext);
  const [genreScore, setGenreScore] = useState(3);
  const [correctId, setCorrectId] = useState<string>("");
  const [buttons, setButtons] = useState<Element[]>([]);

  useEffect(() => {
    if (!answearIsChosen) {
      setGenreScore(3);
      buttons.map((item) => item.classList.remove("clicked"));
      buttons.map((item) => item.classList.remove("correctAnswear"));
      buttons.map((item) => item.classList.remove("wrongAnswear"));
    }
  }, [answearIsChosen, buttons]);
  useEffect(() => {
    const allButtons = document.querySelectorAll(".option__item");
    setButtons(Array.from(allButtons));
  }, []);
  useEffect(() => {
    const correct_el = props.option.options.find(
      (item) => item.is_correct === true
    );
    if (correct_el) {
      const correct_id = correct_el.id;
      setCorrectId(correct_id.toString());
    }
  }, [props.option.options]);

  const optionClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (
      document.getElementById(e.currentTarget.id)?.classList.contains("clicked")
    ) {
      return;
    } else {
      setAnswearIsChosen(true);
      props.setIdChosen(e.currentTarget.id);
      document.getElementById(e.currentTarget.id)?.classList.add("clicked");
      const element = props.option.options.find(
        (item) => e.currentTarget.id === item.id.toString()
      );
      if (genreScore === 1) {
        setDisableButton(false);
        if (element?.is_correct === true) {
          dispatch(setScore(score + genreScore));
          sessionStorage.setItem("score", (score + genreScore).toString());

          document
            .getElementById(e.currentTarget.id)
            ?.classList.add("correctAnswear");

          buttons.map((item) => item.classList.add("clicked"));
        } else {
          document.getElementById(correctId)?.classList.add("correctAnswear");
          // document.getElementById(correctId)?.classList.add("clicked");

          document
            .getElementById(e.currentTarget.id)
            ?.classList.add("wrongAnswear");
          setGenreScore(0);
          dispatch(setScore(score + 0));
        }
      } else if (genreScore > 1) {
        if (element?.is_correct === true) {
          dispatch(setScore(score + genreScore));
          sessionStorage.setItem("score", (score + genreScore).toString());
          setDisableButton(false);
          document
            .getElementById(e.currentTarget.id)
            ?.classList.add("correctAnswear");
          buttons.map((item) => item.classList.add("clicked"));
        } else {
          setGenreScore(genreScore - 1);
          document
            .getElementById(e.currentTarget.id)
            ?.classList.add("wrongAnswear");
        }
      }
    }
  };
  return (
    <div className="questionsContainer">
      <div className="genre-name">{props.option.genre} song</div>
      <div className="directions">
        Listen to the audio and guess what song is it from the list
      </div>
      <Audioplayer audio={props.option.audio} />
      <div className="options">
        {props.option.options.map((item, index) => {
          return (
            <section
              data-testid="songoption"
              className="option__item"
              key={item.id}
              id={item.id.toString()}
              onClick={optionClickHandler}
            >
              <div className="checkbox"></div>
              <p>
                0{index + 1}: {item.name}
              </p>
            </section>
          );
        })}
      </div>
    </div>
  );
};
export default QuestionBlock;
