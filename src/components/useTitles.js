import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const useTitles = () => {
  const titleUpdater = useTitle("HOOOOOOOKS");
  setTimeout(() => {
    titleUpdater("Hook");
  }, 3000);
  return (
    <div>
      <div>HI</div>
    </div>
  );
};

export default useTitles;
