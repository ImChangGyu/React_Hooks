import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const useNotifications = () => {
  const triggerNotif = useNotification("Can I steal your laptop?", {
    body: "you don't know who am i",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default useNotifications;
