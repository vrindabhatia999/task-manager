import React from "react";

function Task({ task }) {
  return (
    <li className="list-item">
      <span>{task.title}</span>

      <div>
        <button className="btn-delete task-btn">delete btn</button>
        <button className="btn-edit task-btn">edit btn</button>
      </div>
    </li>
  );
}

export default Task;
