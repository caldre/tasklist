import React from "react";
import Task from "./Task.js";
import { Consumer } from "./Context";

const TaskBoard = () => {
  const sendDate = () => {
    alert("Date has been sent");
  };

  return (
    <Consumer>
      {value => {
        const { taskList } = value.state;
        return (
          <div className="task-board">
            {taskList.map(task => (
              <Task key={task} name={task} />
            ))}
            <button type="button" className="button" onClick={sendDate}>
              Send
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};

export default TaskBoard;
