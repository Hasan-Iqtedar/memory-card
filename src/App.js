import React from "react";
import Card from "./components/Card";
import Grid from "./components/Grid";
import test from "./test.jpeg";
import index from "./index.jpeg";

const App = () => {
  const images = [test, index, test, index, test, index, test, index, test];

  return (
    <div>
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
