import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Grid from "./components/Grid";
import ScoreCard from "./components/ScoreCard";
import test from "./test.jpeg";
import index from "./index.jpeg";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
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
  const incrementScore = () => setScore(score + 1);
  const incrementBestScore = () => setBestScore(bestScore + 1);

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

  useEffect(() => {
    console.log(`score: ${score}\nbest score: ${bestScore}\n________________`);
    console.log(images[2]);
  }, [score, bestScore, images]);

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
              updateScore={incrementScore}
              updateBestScore={incrementBestScore}
              shuffle={shuffle}
              key={item.id}
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
