import React from "react";
import "./../styles/main.css";

const Card = (props) => {
  const updateScores = () => {
    props.updateScore();
    props.updateBestScore();
    props.shuffle();
  };

  return (
    <div className="card" onClick={updateScores}>
      {props.children}
    </div>
  );
};

export default Card;
