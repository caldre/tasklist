import React, { useState } from "react";

const Task = props => {
  const [isPartyShown, setIsPartyShown] = useState(false);
  const [occupantSelected, setOccupantSelected] = useState("");

  const occupants = ["Niina", "Jyrki"];

  /*  const handleOccupantClick = occupant => {
    setOccupantSelected(occupant);
  }; */

  /* const taskInfo = {
    duty: props.name,
    occupant: occupantSelected,
    date: new Date()
  }; */

  return (
    <div className="container">
      <div className="row">
        <div
          onClick={() => setIsPartyShown(!isPartyShown)}
          className="col-5 mt-4"
          style={{ cursor: "pointer" }}
          border-style="solid"
        >
          {props.name}
          <span style={{ float: "right" }}>{occupantSelected}</span>
          {isPartyShown
            ? occupants.map(occupant => (
                <span
                  key={occupant}
                  onClick={() => setOccupantSelected(occupant)}
                  className="list-group-item"
                  style={{ float: "right" }}
                >
                  {occupant}
                </span>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Task;
