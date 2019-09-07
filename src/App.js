import React from "react";
import Header from "./Header";
import TaskBoard from "./TaskBoard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Header />
      <TaskBoard />
    </div>
  );
}

export default App;
