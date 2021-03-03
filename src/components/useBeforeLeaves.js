import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
};

const useBeforeLeaves = () => {
  const begForLife = () => console.log("Please don't leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default useBeforeLeaves;
