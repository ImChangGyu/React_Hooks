import React, { useState, useEffect } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    // eslint-disable-next-line no-unused-expressions
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const useNetworks = () => {
  const onLine = useNetworks();
  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default useNetworks;
