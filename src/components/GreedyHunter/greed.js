import React, { useState } from "react";
import Logo from "../../GreedAsset/Logo.svg";
import CustomButton from "../CustomButton/CustomButton";
import GameOn from "./GameOn";
import "./greedy.css";

const Greed = () => {
  const [restart, setRestart] = useState(true);
  const [gameOver, setGameOver] = useState(true);

  return (
    <div className={gameOver ? "gameSessionOn" : "gameStart-container"}>
      {gameOver && <GameOn gridNumber="12" />}
      {!gameOver && (
        <div className="contents">
          <div className="logo">
            <img src={Logo} alt="game_logo" />
          </div>
          <h1 className="game_start-title">
            {!restart ? "GREEDY HUNTER" : "BRAVO!"}
          </h1>
          <div style={{ textAlign: "center" }}>
            {gameOver && <p className="subtext">Total Food: 7 / 10</p>}
            {!restart && (
              <p className="subtext">
                The aim is to eat all the food in record time <br /> Confiure
                your game grid below 👇🏼"
              </p>
            )}
            {restart && <p className="subtext">Time Spent: 98 seconds</p>}
            <div className="grid-selection">
              <p className="grid-text">Game grid</p>
              <input type="number" id="level" name="level" min="5" max="12" />
            </div>
            <CustomButton style={{ margin: "10px" }}>
              {!restart ? "START GAME" : "START AGAIN"}
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Greed;
