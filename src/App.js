import React from "react";
import { Container, Row } from "react-bootstrap";
import Display from "./components/DisplayComponent";
import Keypad from "./components/KeypadComponent";
import Controls from "./components/ControlsComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Container fluid id="outer-container">
      <Container id="drum-machine">
        <Row id="disp-ctrl" key="disp-ctrl">
          <Container>
            <Display />
            <Controls />
          </Container>
        </Row>
        <Row id="keypad" key="keypad">
          <Container id="drum-pads">
            <Keypad />
          </Container>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
