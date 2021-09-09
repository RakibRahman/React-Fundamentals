import React, { useState } from "react";
import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import TaskItem from "./TaskItem";
function App() {
  const [search, setSearch] = useState("");

  const data = JSON.parse(localStorage.getItem("taskList"));
  const [items, setItems] = useState(data);
  const [newTask, setNewTask] = useState("");

  const saveAndSetTask = (taskList) => {
    setItems(taskList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };
  const checkHandler = (id) => {
    const taskList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveAndSetTask(taskList);
  };
  const deleteHandler = (id) => {
    const taskList = items.filter((item) => item.id !== id); //return false
    saveAndSetTask(taskList);
  };
  const addTask = (task) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newTask = {
      id,
      checked: false,
      task,
    };
    const taskList = [...items, newTask];
    saveAndSetTask(taskList);
  };
  //! on form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };
  return (
    <div className="App">
      <h1>List </h1>
      <AddItem
        onSubmitHandler={onSubmitHandler}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <TaskItem
        items={items.filter((item) =>
          item.task.toLowerCase().includes(search.toLowerCase())
        )}
        checkHandler={checkHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default App;
