import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

function TaskList() {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul className="list">
        {tasks.map((item, i) => {
          return <Task task={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
