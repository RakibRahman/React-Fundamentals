import React, { useState, useEffect } from "react";
import axios from "axios";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("url")
      .then((response) => {
        if (!response.ok) throw new Error("Fetching data failed || Try Again");
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
