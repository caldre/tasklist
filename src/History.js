import React from "react";

const History = () => {
  console.log(new Date().toLocaleDateString());

  return (
    <div className="task">
      <h2 className="date">Previous day | 14.9.2019 | Next day</h2>
      <p>
        Diswasher:<span>Niina</span>
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
};

export default History;
