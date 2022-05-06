import React from "react";
import Card from "./components/Card";
import test from "./test.jpeg";

const App = () => {
  return (
    <div>
      <p>Hello World</p>
      <Card>
        <div className="image-container">
          <img src={test} alt="kitten" />
        </div>
        <span className="caption">Hello</span>
      </Card>
    </div>
  );
};

export default App;
