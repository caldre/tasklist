import React, { useState } from "react";
import { Consumer } from "./Context";

const Task = props => {
  const [isPartyShown, setIsPartyShown] = useState(false);
  const [occupantSelected, setOccupantSelected] = useState(null);

  /* jotain tällaista pitäs puskee contextiin, ei oo vielä dispatchia
      {payload = {
        {props.name}: occupantSelected
      }  
    }; */
  return (
    <Consumer>
      {value => {
        const { occupantList } = value;

        return (
          <div className="task" onClick={() => setIsPartyShown(!isPartyShown)}>
            {props.name[0].toUpperCase()}
            {props.name.slice(1)}
            {isPartyShown ? (
              occupantList.map(occupant => (
                <span
                  className="occupantlist"
                  key={occupant}
                  onClick={() => setOccupantSelected(occupant)}
                >
                  {occupant}
                </span>
              ))
            ) : (
              <span
                className="occupant"
                style={
                  occupantSelected
                    ? { visibility: "shown" }
                    : { visibility: "hidden" }
                }
              >
                {occupantSelected}
              </span>
            )}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Task;
