import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Controler from "./components/Controler";

function App() {
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const video_ref = useRef();
  const [videoWidth, setVideoWidth] = useState("500px");
  const [speed, setSpeed] = useState(1);

  const totalTime = video_ref?.current?.duration || 0;

  const addTimeUpdate = () => {
    if (video_ref.current) {
      video_ref.current.addEventListener("timeupdate", () => {
        setCurrentTime(video_ref.current.currentTime);
      });
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  const progressChangeHandler = (percent) => {
    if (video_ref) {
      const playingTime = video_ref.current.duration * (percent / 100);
      setCurrentTime(playingTime);
    }
  };

  const playHandler = () => {
    if (video_ref.current) {
      if (nowPlaying) {
        setNowPlaying(false);
        video_ref.current.pause();
      } else {
        setNowPlaying(true);
        video_ref.current.play();
      }
    }
  };

  const onMouseEnter = () => {
    setShowControl(true);
  };

  const onMouseOut = () => {
    setTimeout(() => {
      setShowControl(false);
    }, 3000);
  };

  return (
    <SVideoWrapper>
      <SVideoInner
        width={videoWidth}
        onTouchStart={onMouseEnter}
        onPointerEnter={onMouseEnter}
        onMouseMove={onMouseEnter}
        onPointerLeave={onMouseOut}
      >
        <SVideo ref={video_ref}>
          <source
            src={
              "https://chinatan.smilecast.co.kr/video/us-alliance/us-alliance_master_interview.mp4"
            }
          />
        </SVideo>
        <SControllerWrapper nowPlaying={nowPlaying} showControl={showControl}>
          <Controler
            videoEl={video_ref && video_ref.current}
            currentTime={currentTime}
            progressChangeHandler={progressChangeHandler}
            totalTime={totalTime}
            playHandler={playHandler}
            nowPlaying={nowPlaying}
            setSpeed={setSpeed}
            speed={speed}
            setVideoWidth={setVideoWidth}
            videoWidth={videoWidth}
          />
          <SLabel nowPlaying={nowPlaying}>{nowPlaying ? "LIVE" : "VOD"}</SLabel>
        </SControllerWrapper>
      </SVideoInner>
    </SVideoWrapper>
  );
}

export default App;

const SVideoWrapper = styled.div`
  background-color: grey;
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
`;

const SVideoInner = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${(props) => props.width};
`;

const SVideo = styled.video`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  max-height: 100vh;
`;

const SLabel = styled.div`
  border-radius: 1rem;
  width: 8rem;
  height: 3rem;
  background-color: ${(props) => (props.nowPlaying ? "red" : "green")};
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 1.6rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SControllerWrapper = styled.div`
  opacity: ${(props) =>
    props.showControl || props.nowPlaying === false ? 1 : 0};
  visibility: ${(props) =>
    props.showControl || props.nowPlaying === false ? "visible" : "hidden"};
  transition: 0.3s;
`;
