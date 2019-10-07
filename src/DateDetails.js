import React from "react";
import TaskBoard from "./TaskBoard";
import { Consumer } from "./Context";

// Tämä ehkä tarkoitus myöhemmin integroida samaan näyttöön,
// josta valitaan nykyisen päivän tehtävät, kuitenkin niin että niitä ei voi jälkeenpäin muuttaa
const DateDetails = props => {
  return (
    <Consumer>
      {value => {
        const { tasksHistory } = value;

        const renderDate = tasksHistory
          .filter(taskHistory => taskHistory.date === props.date)
          .map(selectedDate => {
            return Object.entries(selectedDate)
              .slice(1)
              .map(([key, value]) => (
                <div key={key} className="task">
                  <p>{key}</p>
                  <span className="occupant">{value}</span>
                </div>
              ));
          });

        const renderNoData =
          props.date === new Date().toLocaleDateString() ? (
            <TaskBoard />
          ) : (
            <p>No data from this day.</p>
          );

        const renderDateContent = renderDate.length ? renderDate : renderNoData;

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
