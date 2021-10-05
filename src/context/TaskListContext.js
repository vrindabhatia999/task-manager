import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    {
      title: "Read the book",
      id: 1,
    },
    {
      title: "Wash car",
      id: 2,
    },
    {
      title: " write code",
      id: 3,
    },
    {
      title: " call react",
      id: 4,
    },
  ]);

  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        title: title,
        id: Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(2, 10),
      },
    ]);
  };
  return (
    <TaskListContext.Provider value={{ tasks, addTask }}>
      {props.children}
    </TaskListContext.Provider> //children will get value as array of tasks
    //pass functiomn add task in provider so that it can be used by other comps
  );
};

export default TaskListContextProvider;
