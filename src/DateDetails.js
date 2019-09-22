import React from "react";
import { Consumer } from "./Context";

// Tämä ehkä tarkoitus myöhemmin integroida samaan näyttöön,
// josta valitaan nykyisen päivän tehtävät, kuitenkin niin että niitä ei voi jälkeenpäin muuttaa
const DateDetails = props => {
  return (
    <Consumer>
      {value => {
        const { tasksHistory } = value;
        const renderEmpty = <p>No data from this day.</p>;
        const renderDate = tasksHistory
          .filter(taskHistory => taskHistory.date === props.date)
          .map(selectedDate => {
            return Object.entries(selectedDate)
              .slice(1)
              .map(([key, value]) => (
                <p className="task" key={key}>
                  {key.toUpperCase()}
                  <span>{value}</span>
                </p>
              ));
          });

        const renderDateContent = renderDate.length ? renderDate : renderEmpty;

        const renderDateDetails = (
          <div className="date-card">
            <h2>{props.date}</h2>
            {renderDateContent}
          </div>
        );

        return renderDateDetails;
      }}
    </Consumer>
  );
};

export default DateDetails;
