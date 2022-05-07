import React from "react";
import Card from "./components/Card";
import Grid from "./components/Grid";
import ScoreCard from "./components/ScoreCard";
import test from "./test.jpeg";
import index from "./index.jpeg";

const App = () => {
  const images = [test, index, test, index, test, index, test, index, test];

  return (
    <div>

      <div className="score-board">
        <ScoreCard><p className="score-card-text">Score:</p> </ScoreCard>
        <ScoreCard><p className="score-card-text">Best Score:</p> </ScoreCard>
      </div>

      <Grid>
        {images.map((item, index) => {
          return (
            <Card>
              <img src={item} alt="kitten" />
              <span className="caption">Hello</span>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default App;
