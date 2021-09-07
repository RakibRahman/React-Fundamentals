import React, { Fragment } from "react";

import Loading from "./../loading.gif";
import useFetch from "./../helpers/useFetch";

const CustomFetch = () => {
  const {
    data: joke,
    loading,
    error,
    refetch,
  } = useFetch("https://v2.jokeapi.dev/joke/Programming");

  const LoaderIcon = () => (
    <div>
      <img src={Loading} alt="ss" />
    </div>
  );

  if (loading) return <LoaderIcon />;

  if (error) console.log("error");

  return (
    <Fragment>
      <h1>
        {joke?.setup}:{joke?.delivery}
      </h1>
      <button onClick={refetch}>Refetch</button>
    </Fragment>
  );
};
export default CustomFetch;
