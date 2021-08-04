import React, { useState, useEffect } from "react";
const FetchData = () => {
  const [users, setUsers] = useState([]); // Initialize state to hold the users data
  const [inputValue, setInputValue] = useState(1);

  const url = `https://randomuser.me/api/?results=${inputValue}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, [setUsers, url]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Fetch Data Using useEffect</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a number of users"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      {users.map((user) => (
        <div key={user.id.value} className="card">
          <p>{user.name.first}</p>
          <p>{user.email}</p>
          <p>{user.cell}</p>
        </div>
      ))}
    </div>
  );
};
export default FetchData;
