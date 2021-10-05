import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

function TaskForm() {
  const { addTask } = useContext(TaskListContext); //access add task function from context;

  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="add task"
        onChange={handleChange}
        value={title}
        required
      ></input>
      <div>
        <button type="submit" className="btn add-task-btn">
          Add task
        </button>
        <button className="btn clear-btn"> Clear</button>
      </div>
    </form>
  );
}

export default TaskForm;
