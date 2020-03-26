import React, { useReducer } from "react";

const Context = React.createContext();

// Tässä on referenssi datasta, myöhemmin tulee jostain muualta, ehkä paremmassa muodossa?
let taskState = {
  taskList: [
    "dishwasher",
    "cooking",
    "laundry",
    "carbage",
    "clean the kitchen"
  ],
  personList: ["Niina", "Jyrki"],
  currentDay: [],
  tasksHistory: [
    {
      date: new Date("2019", "9", "6").toLocaleDateString(),
      dishwasher: "Jyrki",
      cooking: "Niina",

      carbage: "Niina"
    },
    {
      date: new Date("2019", "9", "5").toLocaleDateString(),
      dishwasher: "Niina",
      vacuuming: "Jyrki",
      laundry: "Niina",
      carbage: "Jyrki"
    },
    {
      date: new Date("2019", "9", "4").toLocaleDateString(),
      dishwasher: "Jyrki",
      cooking: "Niina",
      "Drive kid to daycare": "Niina",
      laundry: "Jyrki"
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // Tähän pitää korjata se ettei samaa tehtävää ole useampaa kappaletta
      return { ...state, currentDay: [...state.currentDay, action.payload] };
    default:
      return state;
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, taskState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

/* MITÄ TOIMINTOJA:

- Käyttäjä valitse taskintekijän
- Käyttäjä vahvistaa päivän tasklistin
- Käyttäjä valitsee päivädetailin
*/

const { Consumer } = Context;

export { Context, Provider, Consumer };
