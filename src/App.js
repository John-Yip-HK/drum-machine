import React from "react";
import Container from "react-bootstrap/Container";
import Display from "./components/DisplayComponent";
import Keypad from "./components/KeypadComponent";
import Controls from "./components/ControlsComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Container fluid id="outer-container">
      <Container id="drum-machine">
        <Display />
        <Controls />
        <Keypad />
      </Container>
    </Container>
  );
}

export default App;
