import React, { useState } from "react";
import uniqid from "uniqid";
import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import TaskItem from "./TaskItem";
function App() {
  const data = JSON.parse(localStorage.getItem("taskList")) || [];
  const [items, setItems] = useState(data);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("a-z");
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
    const newTask = {
      id: uniqid(),
      checked: false,
      task,
    };
    const taskList = [...items, newTask];
    saveAndSetTask(taskList);
  };
  const sortTask = () => {
    const taskList = [...items].sort((a, b) => {
      if (a.task < b.task) return -1;
      if (a.task > b.task) return 1;
      return 0;
    });

    saveAndSetTask(taskList);
    console.log("ok");
  };
  const onChangeSort = (e) => {
    console.log(e.target.value);

    if (e.target.value === "a-z") {
      console.log("sort a-z");

      const taskList = [...items].sort((a, b) => {
        if (a.task < b.task) return -1;
        return 0;
      });
      saveAndSetTask(taskList);
    }
    if (e.target.value === "z-a") {
      console.log("sort z-a");
      const taskList = [...items].sort((a, b) => {
        if (a.task < b.task) return 1;
        return 0;
      });
      saveAndSetTask(taskList);
    }
    if (e.target.value === "usual") {
      console.log("sort usual");
      const taskList = [...items].sort((a, b) => {
        if (a.task > b.task) return 1;
        return 0;
      });
      saveAndSetTask(taskList);
    }
  };
  //! on form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    console.log(items);
  };

  return (
    <div className="App">
      <h1> Task List </h1>
      <AddItem
        onSubmitHandler={onSubmitHandler}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <button onClick={sortTask}>Sort</button>
      <form onSubmit={(e) => e.preventDefault()}>
        <select name="sortTask" id="sortTask" onChange={onChangeSort}>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="usual">Usual</option>
        </select>
      </form>
      <TaskItem
        items={items.filter((item) =>
          item.task.toLowerCase().includes(search.toLowerCase())
        )}
        checkHandler={checkHandler}
        deleteHandler={deleteHandler}
      />
      <p className="total">
        Total {items.length}{" "}
        {items.length === 1 || items.length === 0 ? "Task" : "Tasks"}
      </p>
    </div>
  );
}

export default App;
