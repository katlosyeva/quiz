import { useState } from "react";
import classes from "./PlayScreen.module.css";
import QuestionBlock from "./QuestionBlock";
import VideoBlock from "./VideoBlock";
import Breadcrumbs from "./Breadcrumbs";
import { useEffect, useCallback } from "react";
import { Genre } from "../interfaces/interfaces";
import { RoundContext, IRoundContext } from "../pages/GamePage";
import { useContext } from "react";
import React from "react";

const PlayScreen: React.FC<{
  genre: string;
  genres: string[];
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const [idChosen, setIdChosen] = useState<string>("");
  const [option, setOption] = useState<Genre | undefined>(undefined);
  const { answearIsChosen } = useContext<IRoundContext>(RoundContext);

  const getOption = useCallback(async () => {
    try {
      const data = await fetch(
        `https://music-app-662ef-default-rtdb.firebaseio.com/${props.genre}.json`
      );
      const dataOption = await data.json();
      setOption(dataOption);
    } catch (error) {
      console.log(error);
      props.setIsError(true);
    }
  }, [props]);

  useEffect(() => {
    getOption();
  }, [getOption]);

  return (
    <div>
      <Breadcrumbs genre={props.genre} genres={props.genres} />
      <div className={classes.playscreen}>
        {option && <QuestionBlock option={option} setIdChosen={setIdChosen} />}

        {answearIsChosen ? (
          option && <VideoBlock idChosen={idChosen} option={option} />
        ) : (
          <img
            className={classes.circleImage}
            src="/assets/images/Half_Union.png"
            alt="decoration"
          />
        )}
      </div>
    </div>
  );
};
export default PlayScreen;
