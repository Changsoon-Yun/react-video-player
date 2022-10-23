import React from "react";
import styled from "styled-components";

const ProgressBar = ({
  progressChangeHandler,
  onMouseUp,
  onMouseDown,
  totalTime,
  currentTime,
}) => {
  const toTimeString = (second) => {
    const date = new Date(second * 1000);

    const mm = date.getUTCMinutes();
    const ss = date.getSeconds();

    const formattedMinute = mm + ":";
    const formattedSecond = (ss < 10 ? "0" : "") + ss;

    return formattedMinute + formattedSecond;
  };

  const percentNum = Math.floor((currentTime / totalTime || 0) * 100);

  return (
    <SProgressBar>
      {toTimeString(currentTime)}
      <SInputWrapper>
        <SInput
          onTouchStart={onMouseUp}
          onTouchEnd={onMouseUp}
          onMouseUp={onMouseUp}
          onClick={onMouseUp}
          onChange={(e) => progressChangeHandler(parseInt(e.target.value, 10))}
          type="range"
          min="0"
          max="100"
          step="1"
          value={percentNum}
        />
        <SSlider width={percentNum} />
      </SInputWrapper>
      {toTimeString(totalTime)}
    </SProgressBar>
  );
};

export default ProgressBar;

const SProgressBar = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  margin: 0 3rem;
`;

const SInputWrapper = styled.div`
  flex: 1;
  position: relative;
  margin: 0 3rem;
  display: flex;
  align-items: center;
`;

const SInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  margin: 0;
  height: 3px;
  background-color: grey;
  border-radius: 1.5px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: green;
  }
`;

const SSlider = styled.div`
  width: ${(props) => props.width}%;
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background-color: green;
  z-index: 2;
`;
