import React, { useState } from "react";
const list = [
  "Kill me heal me",
  "this world shall know pain",
  "handa kun",
  "killer world",
];
const list2 = ["Secret Garden", "Hello world", "Tanaka Kun", "killer world"];
const listObj = [
  { id: 0, name: "Minato Namikaze" },
  { id: 1, name: "Naruto Uzumali" },
  { id: 2, name: "Obito Uchiha" },
  { id: 3, name: "Pain" },
];
const MapList = (_) => (
  <section className="list">
    <h1>Some Random List</h1>
    <ul>
      {list.map((item, number) => (
        <li key={number.toString()}>{item}</li>
      ))}
    </ul>
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
const List = (_) => (
  <div>
    <MapList />
    <hr />
    <MapListObject />
  </div>
);
export default List;
