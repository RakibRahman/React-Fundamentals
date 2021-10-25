import React, {
  useEffect,
  FC,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface UserInfoProps {
  title: string;
  first: string;
  last: string;
  gender: string;
  age: number;
  phone: number;
}
interface UserInfo {
  user: UserInfoProps[];
  setUser: Dispatch<SetStateAction<string>>;
}

const url = `https://randomuser.me/api/`;
export const EffectApi: FC<UserInfo> = ({ user, setUser }: UserInfo) => {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results);
      });
    console.log(user);
  }, []);
  return (
    <div>
      <h1>hello</h1>
      {user.map((user) => (
        <div key={new Date().getMilliseconds()}>
          <p>{user.gender}</p>
        </div>
      ))}
    </div>
  );
};
