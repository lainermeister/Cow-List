import React from "react";
import ReactDOM from "react-dom";

const CowList = ({ cowList, selectCowHandler }) => (
  <div>
    List of cows
    {cowList.map((cow) => {
      return (
        <div key={cow.id} onClick={() => selectCowHandler(cow)}>
          {cow.name}
        </div>
      );
    })}
  </div>
);

export default CowList;
