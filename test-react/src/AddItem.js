import React, { useEffect, useRef } from "react";

function AddItem({ newTask, setNewTask, onSubmitHandler }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form
      onSubmit={onSubmitHandler}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.2rem",
      }}
    >
      <label htmlFor="newTask">
        <input
          ref={inputRef}
          type="text"
          placeholder="add new task"
          name="newTask"
          id="newTask"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
      </label>

      <button
        type="submit"
        aria-label="add new task"
        onClick={() => inputRef.current.focus()}
      >
        Add
      </button>
    </form>
  );
}

export default AddItem;
