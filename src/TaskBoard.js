import React from "react";
import Task from "./Task.js";

const TaskBoard = () => {
  return (
    <div className="list-group">
      <ul>
        <Task id="1" name="Dishwasher" />

        <Task id="2" name="Cooking" />
        <Task id="3" name="Laundry" />
        <Task id="4" name="Carbage & bottles" />
        <input
          type="submit"
          value="Send"
          className="btn btn-dark btn-block mt-4"
        />
      </ul>
    </div>
  );
};

export default TaskBoard;
