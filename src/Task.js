import React, { useState, useContext } from "react";
import { Context, Consumer } from "./Context";

const Task = props => {
  const [isPartyShown, setIsPartyShown] = useState(false);
  const [occupantSelected, setOccupantSelected] = useState(null);
  const { dispatch } = useContext(Context);

  /* jotain tällaista pitäs puskee contextiin, ei oo vielä dispatchia
      {payload = {
        {props.name}: occupantSelected
      }  
    }; */

  const sendToContext = (task, person) => {
    dispatch({
      type: "ADD_TASK",
      payload: { [task]: person }
    });
  };

  return (
    <Consumer>
      {value => {
        const { personList } = value.state;

        return (
          <div className="task" onClick={() => setIsPartyShown(!isPartyShown)}>
            <p>{props.name}</p>

            {isPartyShown ? (
              personList.map(person => (
                <span
                  className="occupant"
                  key={person}
                  //onClick={() => setOccupantSelected(occupant)}
                  onClick={() => sendToContext(props.name, person)}
                >
                  {person}
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
