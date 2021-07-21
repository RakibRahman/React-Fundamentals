import React, { useState } from "react";
const list1 = ["Kill me heal me", "Secret Garden", "Smile You", "Healer"];
const list2 = ["Naruto", "One Piece", "Bleach", "Samurai X"];
const listObj = [
  { id: 0, name: "Minato Namikaze" },
  { id: 1, name: "Naruto Uzumali" },
  { id: 2, name: "Obito Uchiha" },
  { id: 3, name: "Pain" },
];

const List = (_) => {
  const anime = "Anime List";
  const drama = "Drama List";
  const Title = () => {
    if (list === list2) {
      return <h1>{anime}</h1>;
    }
    if (list === list1) {
      return <h1>{drama}</h1>;
    }
  };
  const [list, setList] = useState(list1);
  const onClickHandler = (e) => {
    setList(list === list1 ? list2 : list1);

    const btn = document.getElementById("btn");
    btn.style.backgroundColor = "red";
  };
  const MapList = (_) => (
    <section className="list">
      <Title />

      <ul>
        {list.map((item, number) => (
          <li key={number.toString()}>{item}</li>
        ))}
      </ul>
      <button id="btn" type="button" onClick={onClickHandler}>
        🔃🔃🔃
      </button>
    </section>
  );
  const MapListObject = (_) => (
    <section className="list">
      <h1>Some Random Names</h1>
      <ul>
        {listObj.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
  return (
    <div>
      <MapList />
      <hr />
      <MapListObject />
    </div>
  );
};
export default List;
