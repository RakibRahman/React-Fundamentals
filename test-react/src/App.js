import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import TaskItem from "./TaskItem";
import SortItems from "./SortItems";

function App() {
  const data = JSON.parse(localStorage.getItem("taskList")) || [];
  const [items, setItems] = useState(data);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");

  const API_URL = `http://localhost:3500/items`;

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(items));

    const left = [...items].filter((item) => item.checked === false);
    document.title = `Task List || ${left.length} ${
      left.length === 1 ? " Task" : " Tasks"
    } To Complete`;
  }, [items]);

  const checkHandler = (id) => {
    const taskList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(taskList);
  };
  const deleteHandler = (id) => {
    const taskList = items.filter((item) => item.id !== id); //return false
    setItems(taskList);
  };
  const addTask = (task) => {
    const newTask = {
      id: uniqid(),
      checked: false,
      task,
    };
    const taskList = [...items, newTask];
    setItems(taskList);
  };

  //! on form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="App">
      <h1> Task List </h1>
      <AddItem
        onSubmitHandler={onSubmitHandler}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <SearchItem search={search} setSearch={setSearch} setItems={setItems} />

      <SortItems items={items} setItems={setItems} />

      <TaskItem
        items={items.filter((item) =>
          item.task.toLowerCase().includes(search.toLowerCase())
        )}
        checkHandler={checkHandler}
        deleteHandler={deleteHandler}
      />
      <p className="total">
        Total {items.length}
        {items.length === 1 || items.length === 0 ? " Task" : " Tasks"}
      </p>
    </div>
  );
}

export default App;
