import React from "react";

function TaskItem({ items, checkHandler, deleteHandler }) {
  return (
    <ul>
      {items.map((item) => (
        <p style={{ display: "flex", gap: "0.5rem" }} key={item.id.toString()}>
          <input
            type="checkbox"
            checked={item.checked}
            id={item.id}
            onChange={() => checkHandler(item.id)}
          />
          <label className={item.checked ? "active" : "label"}>
            {item.task}
          </label>
          <button onClick={() => deleteHandler(item.id)}>⛔</button>
        </p>
      ))}
    </ul>
  );
}

export default TaskItem;
