import React, {
  useEffect,
  FC,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

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

const url = `https://randomuser.me/api/?results=10`;
export const EffectApi: FC = () => {
  const [user, setUser] = useState<UserInfo>([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results);
      });
  }, []);
  return (
    <div>
      <h1>hello</h1>
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
              {user.name.title} {user.name.first} {user.name.first}
            </p>
            <p>{user.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
