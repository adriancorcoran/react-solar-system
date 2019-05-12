import React from "react";
import OrbitingObject from "./components/OrbitingObject";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="universe">
      <OrbitingObject
        key="1"
        properties={{
          display: "none",
          diameter: 25,
          center: {
            cx: 720,
            cy: 400
          },
          position: {
            px: 0,
            py: 0
          },
          radius: 500,
          angle: 0,
          viewTilt: 0.5
        }}
      />
      <OrbitingObject
        key="2"
        properties={{
          display: "none",
          diameter: 35,
          center: {
            cx: 720,
            cy: 400
          },
          position: {
            px: 0,
            py: 0
          },
          radius: 400,
          angle: 0,
          viewTilt: 0.5
        }}
      />
      <OrbitingObject
        key="3"
        properties={{
          display: "none",
          diameter: 50,
          center: {
            cx: 720,
            cy: 400
          },
          position: {
            px: 0,
            py: 0
          },
          radius: 250,
          angle: 0,
          viewTilt: 0.5
        }}
      />
    </div>
  );
}

export default App;
