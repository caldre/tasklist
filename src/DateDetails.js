import React from "react";
import { Consumer } from "./Context";

// Tämä ehkä tarkoitus myöhemmin integroida samaan näyttöön,
// josta valitaan nykyisen päivän tehtävät, kuitenkin niin että niitä ei voi jälkeenpäin muuttaa

const DateDetails = props => {
  return (
    <Consumer>
      {value => {
        const { tasksHistory } = value;

        // Miten käsittelen allaolevaa selectedDate-arrayta?
        const renderDate = tasksHistory
          .filter(taskHistory => taskHistory.date === props.date)
          .map(({ carbage, cooking, dishwasher, laundry, date }) => {
            return (
              <div className="task">
                <h2 className="date">{date}</h2>
                <p>
                  Date:<span>{date}</span>
                </p>
                <p>
                  Cooking:<span>{cooking}</span>
                </p>
                <p>
                  Laundry:<span>{laundry}</span>
                </p>
                <p>
                  Carbage & Bottles:<span>{carbage}</span>
                </p>
              </div>
            );
          });

        return renderDate;
      }}
    </Consumer>
  );
};

export default DateDetails;
