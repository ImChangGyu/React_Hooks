import React, { useEffect, useState } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  if (!opts.url) {
    return;
  }
  return { ...state, refetch };
};

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "yts.am/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nerror: ${error}\ndata: ${JSON.stringify(data)}`
  );
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
