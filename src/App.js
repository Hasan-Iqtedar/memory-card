import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Grid from "./components/Grid";
import ScoreCard from "./components/ScoreCard";
import test from "./test.jpeg";
import index from "./index.jpeg";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [images, setImages] = useState([
    { data: test, id: 0 },
    { data: index, id: 1 },
    { data: test, id: 2 },
    { data: index, id: 3 },
    { data: test, id: 4 },
    { data: index, id: 5 },
    { data: test, id: 6 },
    { data: index, id: 7 },
    { data: test, id: 8 },
  ]);

  const resetScore = () => setScore(0);
  const resetClickedImages = () => setClickedImages([]);
  const incrementScore = () => setScore(score + 1);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  const compareClickedImages = (id) =>
    clickedImages.findIndex((value) => value === id) !== -1;

  const updateClickedImages = (id) => {
    let updatedList = [...clickedImages];
    updatedList = [...updatedList, id];
    setClickedImages(updatedList);
  };

  const shuffle = () => {
    const shuffledImages = [...images];

    for (let i = shuffledImages.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = shuffledImages[i];
      shuffledImages[i] = shuffledImages[randomIndex];
      shuffledImages[randomIndex] = temp;
    }
    setImages(shuffledImages);
  };

  return (
    <div>
      <div className="score-board">
        <ScoreCard>
          <p className="score-card-text">Score: {score}</p>{" "}
        </ScoreCard>
        <ScoreCard>
          <p className="score-card-text">Best Score: {bestScore}</p>{" "}
        </ScoreCard>
      </div>

      <Grid>
        {images.map((item) => {
          return (
            <Card
              resetScore={resetScore}
              updateScore={incrementScore}
              shuffle={shuffle}
              clickedImages={clickedImages}
              updateClickedImages={updateClickedImages}
              compareClickedImages={compareClickedImages}
              resetClickedImages={resetClickedImages}
              key={item.id}
              id={item.id}
            >
              <img src={item.data} alt="kitten" />
              <span className="caption">Hello</span>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default App;
