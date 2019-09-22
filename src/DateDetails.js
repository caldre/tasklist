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
        const selectedDate = tasksHistory.filter(
          taskHistory => taskHistory.date === props.date
        );
        // Voin vaihtaa sen objektiksi esim
        // const objekti = selectedDate[0]
        // mutta en voi renderöidä siitä arvoja tyyliin objekti.dishwasher??
        if (selectedDate[0]) {
          console.log(selectedDate[0]);
        }

        return (
          <div className="task">
            <h2 className="date">{props.date}</h2>
            <p>
              {/* Allaoleva ratkaisu ei voi olla mitenkään järkevä, eihän? */}
              {/* Kait noi saa mapattua jotenkin järkevämmin? */}
              {/* DEMO: Klikkaa kalenterista joko: 20, 21, 22 niin ekalla rivillä näkyy miten pitäisi toimia  */}
              {/* DEMO: Jos klikkaa jotain muuta niin crashaa, se korjataan myöhemmin :)  */}
              {Object.keys(selectedDate[0])[1]}
              <span>{Object.values(selectedDate[0])[1]}</span>
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
