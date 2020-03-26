import React, { useState } from "react";
import Header from "./Header";
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
        <DateDetails date={state.date} />
        <Calendar
          className="calendar"
          onChange={date => setState({ date: date.toLocaleDateString() })}
        />
      </Provider>
    </div>
  );
};

export default App;
