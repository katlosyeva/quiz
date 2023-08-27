import React from "react";
import classes from "./VideoBlock.module.css";
import Videoplayer from "./Videoplayer";
import { Genre } from "../interfaces/interfaces";
const VideoBlock: React.FC<{
  option: Genre;
  idChosen: string;
}> = (props) => {
  const correct_el = props.option.options.find(
    (item) => item.id.toString() === props.idChosen
  );

  return (
    <div className={classes.videoBlock}>
      <div className={classes.title}>
        {correct_el?.id && correct_el?.id}: {correct_el?.name}
      </div>
      {correct_el && <Videoplayer correct_el={correct_el} />}

      <div className={classes.description}>{correct_el?.description}</div>
    </div>
  );
};

export default VideoBlock;
