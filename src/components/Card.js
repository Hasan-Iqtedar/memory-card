import React from "react";
import "./../styles/main.css";

const Card = (props) => {
  const updateScores = () => {
    const id = props.id;

    if (props.compareClickedImages(id)) {
      props.resetScore();
      props.resetClickedImages();
    } else {
      props.updateScore();
      props.updateClickedImages(id);
    }
    props.shuffle();
  };

  return (
    <div className="card" onClick={updateScores}>
      {props.children}
    </div>
  );
};

export default Card;
