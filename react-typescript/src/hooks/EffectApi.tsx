import React, { useEffect, FC, useState, useReducer } from "react";

interface UserInfoProps {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  gender: string;
  age: number;
  phone: number;
}
type UserInfo = UserInfoProps[];
interface StateProps {
  user: Array<UserInfo>;
  loading: boolean;
}

const url = `https://randomuser.me/api/?results=10`;
export const EffectApi: FC = () => {
  const [user, setUser] = useState<UserInfo>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data.results);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {user.map((user, index) => (
            <div
              style={{
                border: "1px solid red",
                width: "300px",
                textAlign: "center",
              }}
              key={index}
            >
              <img src={user.picture.large} alt="profile " />
              <p>
                {user.name.title} {user.name.first} {user.name.last}
              </p>
              <p>{user.gender}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
