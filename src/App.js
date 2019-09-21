import React, { useState } from "react";
import Header from "./Header";
import TaskBoard from "./TaskBoard";
import DateDetails from "./DateDetails";
import Calendar from "react-calendar";
import { Provider } from "./Context";
import "./app.css";

const App = () => {
  const [state, setState] = useState({ date: new Date().toLocaleDateString() });

  return (
    <div className="container">
      <Provider>
        <Header />
        <TaskBoard />
        <Calendar
          onChange={date => setState({ date: date.toLocaleDateString() })}
          maxDate={new Date()}
          style={{ margin: "auto" }}
        />
        <DateDetails date={state.date} />
      </Provider>
    </div>
  );
};

export default App;
