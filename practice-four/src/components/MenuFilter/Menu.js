import React, { useState } from "react";
import "./Menu.css";
import { menuData } from "./menuData";
function Menu() {
  const [category, setCategory] = useState("");
  const [showAll, setShowAll] = useState(true);
  const Button = ({ type, clr }) => {
    const browseHandler = () => {
      setCategory(type);
      setShowAll(false);
    };
    return (
      <button style={{ color: clr }} onClick={browseHandler}>
        {type}
      </button>
    );
  };
  const showHandler = (e) => {
    setShowAll(true);
  };
  const filterItems = (list) =>
    list.filter((item) => (showAll ? true : item.type === category));
  return (
    <div className="menu__wrapper">
      <h1>Menu List</h1>
      <div className="menu__btn">
        <button onClick={showHandler}>All</button>
        <Button type="basic" clr="green" />
        <Button type="premium" clr="orange" />
        <Button type="luxury" clr="hotpink" />
      </div>
      <div className="card__wrapper">
        {filterItems(menuData).map((item) => {
          return (
            <div className="menu__card" key={item.model}>
              <img src={item.pic} alt="ss" />
              <h1>{item.model}</h1>
              <p>{item.type}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
