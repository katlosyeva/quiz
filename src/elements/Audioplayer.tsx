import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

import classes from "./Audioplayer.module.css";

const Audioplayer: React.FC<{ audio: string }> = (props) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef<HTMLAudioElement>(null); // reference our audio component
  const progressBar = useRef<HTMLInputElement>(null); // reference our progress bar
  const animationRef = useRef<any>(); // reference the animation

  useEffect(() => {
    if (audioPlayer.current && progressBar?.current) {
      const seconds = Math.floor(audioPlayer.current?.duration);
      setDuration(seconds);
      progressBar.current.max = seconds.toString();
    }
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);
  const onLoadedMetaData = () => {
    if (audioPlayer.current?.duration) {
      setDuration(audioPlayer.current?.duration);
    }
  };
  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(false);
    progressBar!.current!.value = "0";
  }, [props.audio]);

  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = (): void => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current?.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    if (audioPlayer.current?.currentTime && progressBar.current) {
      progressBar.current.value = audioPlayer.current?.currentTime.toString();
    }
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    if (audioPlayer.current?.currentTime && progressBar.current?.value) {
      audioPlayer.current.currentTime = +progressBar.current?.value;
    }
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    if (progressBar.current?.value) {
      progressBar.current?.style.setProperty(
        "--seek-before-width",
        `${(+progressBar.current.value / duration) * 100}%`
      );
      setCurrentTime(+progressBar.current.value);
    }
  };

  return (
    <div className={classes.audioContainer}>
      <audio
        ref={audioPlayer}
        onLoadedMetadata={onLoadedMetaData}
        src={props.audio}
        preload="metadata"
      ></audio>



      <div className={classes.buttonContainer}>
        <button
          aria-label="button play pause"
          onClick={togglePlayPause}
          className={classes.playPause}
        >
          {isPlaying ? (
            <FaPause data-testid="pause" fontSize="1rem" />
          ) : (
            <FaPlay data-testid="play" fontSize="1rem" />
          )}
        </button>
      </div>

      <div className={classes.rangeslider}>
        {/* progress bar */}
        <div>
          <input
            type="range"
            className={classes.progressBar}
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>
        <div className={classes.timeCounters}>
          {/* current time */}
          <div data-testid="current time" className={classes.time}>{calculateTime(currentTime)}</div>
          {/* duration */}
          <div className={classes.duration}>
            {/* {duration && !isNaN(duration) && calculateTime(duration)} */}
            {duration && !isNaN(duration) && calculateTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audioplayer;
