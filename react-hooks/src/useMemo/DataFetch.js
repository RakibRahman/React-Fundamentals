import { useState, useMemo, useEffect } from "react";

const DataFetch = () => {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const getLongestComment = (comment) => {
    if (!comment) return null;
    let longestComment = "";
    for (let i = 0; i < comment.length; i++) {
      let currentComment = comment[i].name;
      if (currentComment.length > longestComment.length) {
        longestComment = currentComment;
      }
    }
    console.log("this was computed");
    return longestComment;
  };
  const biggestComment = useMemo(() => getLongestComment(data), [data]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        // console.log(res);
        setData(res);
      });
  }, []);

  return (
    <>
      <h1>Longest Comment</h1>
      <ul>
        {data.slice(0, 10).map((com) => (
          <li key={com.id}>
            {com.id}:{com.name} <br />
          </li>
        ))}
      </ul>
      <p>Longest Comment: {biggestComment} </p>
      <button onClick={() => setReload((r) => !r)}>Re-Render</button>
      {/* 
      re-render btn also invokes/renders getLongestComment fn which is not related to 'reload' state 
      
      to prevent 'getLongestComment' Fn from unnecessary calls/ we use useMemo hook'
      */}
    </>
  );
};

export default DataFetch;
