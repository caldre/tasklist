import React from "react";
import { Consumer } from "./Context";

const DateDetails = props => {
  return (
    <Consumer>
      {value => {
        return (
          <div className="task">
            <h2 className="date">{props.date}</h2>
            <p>
              Diswasher:<span>Niina</span>
            </p>
            <p>
              Cooking:<span>Jyrki</span>
            </p>
            <p>
              Laundry:<span>Niina</span>
            </p>
            <p>
              Carbage & Bottles:<span>Jyrki</span>
            </p>
          </div>
        );
      }}
    </Consumer>
  );
};

export default DateDetails;
