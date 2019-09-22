import React, { useReducer } from "react";

const Context = React.createContext();

// Tässä on referenssi datasta, myöhemmin tulee jostain muualta, ehkä paremmassa muodossa?

let state = {
  taskList: ["dishwasher", "cooking", "laundry", "carbage"],
  occupantList: ["Niina", "Jyrki"],
  currentDay: {},
  tasksHistory: [
    {
      date: new Date("2019", "8", "22").toLocaleDateString(),
      dishwasher: "Jyrki",
      cooking: "Niina",
      laundry: "Jyrki",
      carbage: "Niina"
    },
    {
      date: new Date("2019", "8", "21").toLocaleDateString(),
      dishwasher: "Niina",
      cooking: "Jyrki",
      laundry: "Niina",
      carbage: "Jyrki"
    },
    {
      date: new Date("2019", "8", "20").toLocaleDateString(),
      dishwasher: "Jyrki",
      cooking: "Niina",
      laundry: "Jyrki",
      carbage: "Niina"
    }
  ]
};

const Provider = props => {
  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

/* MITÄ TOIMINTOJA:

- Käyttäjä valitse taskintekijän
- Käyttäjä vahvistaa päivän tasklistin
- Käyttäjä valitsee päivädetailin
*/

const { Consumer } = Context;

export { Provider, Consumer };
