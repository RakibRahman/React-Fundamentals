import React from "react";

function AddItem({ newTask, setNewTask, onSubmitHandler }) {
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="newTask">Add new task</label>
      <input
        type="text"
        placeholder="add new task"
        name="newTask"
        id="newTask"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;
