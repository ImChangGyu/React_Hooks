import React, { useEffect, useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      console.log("full");
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const useFullscreens = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div ref={element}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxjcIdBDB5Ms8OKknbprQO-u_PKxHHtCt1A&usqp=CAU" />
      <button onClick={triggerFull}>Make fullscreen</button>
      <button onClick={exitFull}>Exit fullscreen</button>
    </div>
  );
};

export default useFullscreens;
