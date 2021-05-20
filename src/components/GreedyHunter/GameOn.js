import React, { useState } from "react";
import foodIcon from "../../GreedAsset/food.svg";
import "./GameOn.css";

const GameOn = ({ gridNumber }) => {
  const gridBoards = async () => {
    let gridColumns = document.querySelector(".gridBoard");
    let gridNumbers = gridNumber * gridNumber;
    // console.log(gridNumbers);
    for (let index = 0; index < gridNumbers; index++) {
      const element = document.createElement("span");
      const food = document.createElement("img");
      food.src = foodIcon;
      for (let j = 0; j < gridNumber; j++) {
        // let element;

        Math.floor(Math.random(element.appendChild(food)));
      }

      // Math.floor(Math.random() * 10) + 1;
      await gridColumns.appendChild(element).classList.add("rtrt");
    }
  };

  return (
    <div className="board-container">
      <div
        className="gridBoard"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridNumber},1fr)`,
          // gridTemplateRows: `repeat(${gridNumber},1fr)`,
        }}
      ></div>
      <button
        onClick={() => {
          gridBoards();
        }}
      >
        make it
      </button>
    </div>
  );
};

export default GameOn;
