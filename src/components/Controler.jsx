import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import SpeedOptions from "./SpeedOptions";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import CenterButtonGroup from "./CenterButtonGroup";

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
      <CenterButtonGroup
        playHandler={playHandler}
        nowPlaying={nowPlaying}
        backwardHandler={backwardHandler}
        forwardHandler={forwardHandler}
      />
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

const SFullscreenButton = styled.button`
  width: 50px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
`;
