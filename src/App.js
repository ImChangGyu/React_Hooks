import React, { useState } from "react";
import UseTab from "./components/useTab";
import UseEffect from "./components/useEffects";
import UseTitle from "./components/useTitles";
import UseClick from "./components/useClicks";
import UseConfirm from "./components/useConfirms";
import UsePreventLeave from "./components/usePreventLeaves";
import UseBeforeLeave from "./components/useBeforeLeaves";
import UseFadeIn from "./components/useFadeIns";
import UseNetwork from "./components/useNetworks";
import UseScroll from "./components/useScrolls";
import UseFullscreen from "./components/useFullscreens";
import UseNotification from "./components/useNotifications";
import UseAxios from "./components/useAxios";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const name = useInput("Mr.", maxLen);
  return (
    <>
      <div>{count}</div>
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount}>Decrease</button>

      <input placeholder="Name" {...name} />
      <UseTab />
      <UseEffect />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
      <UseBeforeLeave />
      <UseFadeIn />
      <UseNetwork />
      <UseScroll />
      <UseFullscreen />
      <UseNotification />
      <UseAxios />
    </>
  );
};

export default App;
