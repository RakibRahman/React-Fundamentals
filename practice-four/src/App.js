import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const App = (_) => {
  const [users, setUsers] = useState([]);
  const [userNumber, setUserNumber] = useState(1);
  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${userNumber}`)
      .then(({ data }) => {
        setUsers(data.results);
        console.log(users);
      });
  }, []);
  const Card = () => {
    return (
      <div className="wrapper">
        {users.map((user) => (
          <div className="card" key={user.login.md5}>
            <img src={user.picture.large} alt="profile pic" />
            <h3>
              Name:
              {user.name.title} {user.name.first} {user.name.last}
            </h3>
            <h3>Gender: {user.gender}</h3>
            <h3>Age: {user.dob.age}</h3>
            <h3>DOB: {user.dob.date.slice(0, 10)}</h3>
            <h3>
              Address: {user.location.city} ,{user.location.country}
            </h3>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>
          </div>
        ))}
      </div>
    );
  };
  return (
    <Fragment>
      <h1>Fetching Data</h1>
      <Card />
    </Fragment>
  );
};
export default App;
