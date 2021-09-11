import React from "react";

function AddItem({ newTask, setNewTask, onSubmitHandler }) {
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
          type="text"
          placeholder="add new task"
          name="newTask"
          id="newTask"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
      </label>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;
