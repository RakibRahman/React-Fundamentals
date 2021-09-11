import React from "react";

function TaskItem({ items, checkHandler, deleteHandler }) {
  return (
    <ul
      style={{
        width: "600px",
        height: "400px",
        border: "1px solid green",
        overflowY: "scroll",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      {items.map((item) => (
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
            width: "100%",
          }}
          key={item.id.toString()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <input
              type="checkbox"
              checked={item.checked}
              id={item.id}
              onChange={() => checkHandler(item.id)}
            />
            <label className={item.checked ? "active" : "label"}>
              {item.task}
            </label>
          </div>
          <button
            style={{
              background: "transparent",
              padding: "0.5rem",
              border: "none",
            }}
            onClick={() => deleteHandler(item.id)}
          >
            ⛔
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskItem;
