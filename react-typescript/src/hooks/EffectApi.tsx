import React, { useEffect, FC, useState } from "react";

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
  dob: {
    age: number;
  };
  phone: number;
}
type UserInfo = UserInfoProps[];

const url = `https://randomuser.me/api/?results=10`;
export const EffectApi: FC = () => {
  const [user, setUser] = useState<UserInfo>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("failed to load");
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
              <p>{user.dob.age}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
