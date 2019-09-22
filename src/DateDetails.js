import React from "react";
import { Consumer } from "./Context";

// Tämä ehkä tarkoitus myöhemmin integroida samaan näyttöön,
// josta valitaan nykyisen päivän tehtävät, kuitenkin niin että niitä ei voi jälkeenpäin muuttaa
const DateDetails = props => {
  return (
    <Consumer>
      {value => {
        const { tasksHistory } = value;
        const renderEmpty = (
          <div className="date-card">
            <h2>{props.date}</h2>
            <p>No data from this day.</p>
          </div>
        );
        const renderDate = tasksHistory
          .filter(taskHistory => taskHistory.date === props.date)
          .map(selectedDate => {
            return Object.entries(selectedDate).map(([key, value]) => (
              <p className="task" key={key}>
                {key.toUpperCase()}
                {value.slice(1)}
                <span>
                  `${key} ${value}`
                </span>
              </p>
            ));
          });

        console.log("render date", renderDate);
        // if (arrayOfSelectedDate.length > 0) {
        //   const objectOfSelectedDate = arrayOfSelectedDate[0];

        //   const keys = Object.keys(objectOfSelectedDate).slice(1);
        //   const values = Object.values(objectOfSelectedDate).slice(1);

        //   const renderThis = keys.map((key, i) => {
        //     const keyValuePaired = values[i];

        //     return (
        //       <p className="task" key={key}>
        //         {key[0].toUpperCase()}
        //         {key.slice(1)}
        //         <span>{keyValuePaired}</span>
        //       </p>
        //     );
        //   });

        //   return (
        //     <div className="date-card">
        //       <h2>{props.date}</h2>
        //       {renderThis}
        //     </div>
        //   );
        // }

        return renderDate.length ? renderDate : renderEmpty;
      }}
    </Consumer>
  );
};

export default DateDetails;
