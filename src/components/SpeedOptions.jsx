import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";

const Options = ({ data, speed }) => {
  return (
    <SOptions>
      {speed === data && (
        <SActive>
          <FcCheckmark />
        </SActive>
      )}
      {data} X
    </SOptions>
  );
};

const SpeedOptions = ({ videoEl }) => {
  const [speed, setSpeed] = useState("1");
  const [open, setOpen] = useState(false);
  const selectList = ["0.5", "0.75", "1", "1.25", "1.5", "2"];
  const speedHandler = (e) => {
    setSpeed(e.target.innerHTML.slice(0, -2));

    setOpen(false);
  };

  useEffect(() => {
    if (videoEl) {
      videoEl.playbackRate = speed;
    }
  }, [speed, videoEl]);

  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <SSpeedWrapper>
      <SSelected onClick={openHandler}>{speed}배속</SSelected>
      {open && (
        <SSelect onClick={speedHandler}>
          {selectList.map((data, i) => (
            <Options speed={speed} data={data} key={i} />
          ))}
        </SSelect>
      )}
    </SSpeedWrapper>
  );
};

export default SpeedOptions;

const SSpeedWrapper = styled.div`
  position: relative;
  width: 10rem;
  color: #666666;
  z-index: 1;
`;

const SSelected = styled.div`
  padding-left: 2rem;
  cursor: pointer;
  color: white;
`;

const SSelect = styled.ul`
  position: absolute;
  bottom: 3.1rem;
  right: 0;
  width: 10rem;
  background-color: white;
  font-weight: 500;
  list-style: none;
  border: 1px solid #eee;
`;

const SOptions = styled.li`
  position: relative;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  text-align: right;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

const SActive = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;
