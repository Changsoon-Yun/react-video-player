import React from "react";
import styled from "styled-components";
import {
  AiOutlineBackward,
  AiOutlineForward,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";

const CenterButtonGroup = ({
  nowPlaying,
  playHandler,
  backwardHandler,
  forwardHandler,
}) => {
  return (
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
  );
};

export default CenterButtonGroup;

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
