import React from "react";
import Task from "./Task.js";
import { Consumer } from "./Context";

const TaskBoard = () => {
  return (
    <Consumer>
      {value => {
        const { taskList } = value;
        return (
          <div className="task-board">
            {taskList.map(task => (
              <Task key={task} name={task} />
            ))}
            <button type="button" className="button">
              Send
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};

export default TaskBoard;
