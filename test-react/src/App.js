import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import TaskItem from "./TaskItem";
import SortItems from "./SortItems";
import apiReq from "./apiReq";
function App() {
  // const data = JSON.parse(localStorage.getItem("taskList")) || [];
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = `http://localhost:3500/items`;

  useEffect(() => {
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
    }, 200);
  }, []);

  const checkHandler = async (id) => {
    const taskList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(taskList);

    const itemsUpdated = taskList.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: itemsUpdated[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiReq(reqUrl, updateOptions);
    if (result) setError(result);
  };
  const deleteHandler = async (id) => {
    const taskList = items.filter((item) => item.id !== id); //return false
    setItems(taskList);

    // const delItems = taskList.filter((item) => item.id === id);
    const delOptions = {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ id: delItems[0].id }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiReq(reqUrl, delOptions);
    if (result) setError(result);
  };
  const addTask = async (task) => {
    const newTask = {
      id: uniqid(),
      checked: false,
      task,
    };
    const taskList = [...items, newTask];
    setItems(taskList);
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    };
    const result = await apiReq(API_URL, postOptions);
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
