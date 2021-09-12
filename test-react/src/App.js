import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import TaskItem from "./TaskItem";
import SortItems from "./SortItems";

function App() {
  // const data = JSON.parse(localStorage.getItem("taskList")) || [];
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = `http://localhost:3500/items`;

  useEffect(() => {
    // localStorage.setItem("taskList", JSON.stringify(items));

    const left = [...items].filter((item) => item.checked === false);
    document.title = `Task List || ${left.length} ${
      left.length === 1 ? " Task" : " Tasks"
    } To Complete`;
  }, [items]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("fetching data is interrupted");
      const tasks = await response.json();
      console.log(tasks);
      setItems(tasks);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

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

      <main>
        {loading && <p className="loading">Loading.....</p>}
        {error && <p className="err">{`Error: ${error}`}</p>}
        {!error && !loading && (
          <TaskItem
            items={items.filter((item) =>
              item.task.toLowerCase().includes(search.toLowerCase())
            )}
            checkHandler={checkHandler}
            deleteHandler={deleteHandler}
          />
        )}
      </main>
      {!error && (
        <footer className="total">
          Total {items.length}
          {items.length === 1 || items.length === 0 ? " Task" : " Tasks"}
        </footer>
      )}
    </div>
  );
}

export default App;
