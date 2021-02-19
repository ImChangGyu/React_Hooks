import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const useClicks = () => {
  const sayHello = () => {
    console.log("sayHello");
  };
  const title = useClick(sayHello);
  return (
    <div>
      <div>Hi</div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default useClicks;
