import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import SpeedOptions from "./SpeedOptions";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import {
  AiOutlineBackward,
  AiOutlineForward,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";

const Controler = ({
  progressChangeHandler,
  playHandler,
  nowPlaying,
  totalTime,
  currentTime,
  videoEl,
  setSpeed,
  speed,
  setVideoWidth,
  videoWidth,
}) => {
  const onMouseUp = () => {
    if (videoEl) {
      videoEl.currentTime = currentTime;
      nowPlaying ? videoEl.play() : videoEl.pause();
    }
  };

  const onMouseDown = () => {
    if (videoEl) {
      videoEl.pause();
    }
  };

  const toggleFullScreen = () => {
    if (videoWidth === "500px") {
      setVideoWidth("100%");
    } else {
      setVideoWidth("500px");
    }
  };

  const backwardHandler = () => {
    currentTime = currentTime - 10;
    videoEl.currentTime = currentTime;
  };

  const forwardHandler = () => {
    currentTime = currentTime + 10;
    videoEl.currentTime = currentTime;
  };

  return (
    <SController>
      <SButtonGroup>
        <SJumbButton onClick={backwardHandler}>
          <p>10초</p>
          <AiOutlineBackward />
        </SJumbButton>
        <SPlayButton
          onClick={() => {
            playHandler();
          }}
        >
          {nowPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </SPlayButton>
        <SJumbButton onClick={forwardHandler}>
          <p>10초</p>
          <AiOutlineForward />
        </SJumbButton>
      </SButtonGroup>
      <ProgressBar
        totalTime={totalTime}
        currentTime={currentTime}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        progressChangeHandler={progressChangeHandler}
      />
      <SpeedOptions setSpeed={setSpeed} speed={speed} videoEl={videoEl} />
      <SFullscreenButton onClick={toggleFullScreen}>
        {videoWidth === "500px" ? <BsFullscreen /> : <BsFullscreenExit />}
      </SFullscreenButton>
    </SController>
  );
};

export default Controler;

const SController = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  background-color: rgba(0, 0, 0, 0.3);
`;

const SButtonGroup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;

const SPlayButton = styled.button`
  margin: 0 5rem;
  border: none;
  background-color: transparent;
  font-size: 5rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SJumbButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  & svg {
    font-size: 4rem;
  }
`;

const SFullscreenButton = styled.button`
  width: 50px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
`;
