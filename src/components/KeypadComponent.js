import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  keydownHandler,
  pointerupHandler,
  pointerdownHandler,
} from "../custom_scripts/keypadHandlers";

class Keypad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", keydownHandler);
    document.addEventListener("keyup", pointerupHandler);
    document.addEventListener("pointerdown", pointerdownHandler);
    document.addEventListener("pointerup", pointerupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", keydownHandler);
    document.removeEventListener("keyup", pointerupHandler);
    document.removeEventListener("pointerdown", pointerdownHandler);
    document.removeEventListener("pointerup", pointerupHandler);
  }

  render() {
    return (
      <>
        <Row>
          <Container id="drum-pads">
            <Row>
              <Col className="drum-pad">Q</Col>
              <Col className="drum-pad">W</Col>
              <Col className="drum-pad">E</Col>
            </Row>
            <Row>
              <Col className="drum-pad">A</Col>
              <Col className="drum-pad">S</Col>
              <Col className="drum-pad">D</Col>
            </Row>
            <Row>
              <Col className="drum-pad">Z</Col>
              <Col className="drum-pad">X</Col>
              <Col className="drum-pad">C</Col>
            </Row>
          </Container>
        </Row>
      </>
    );
  }
}

export default Keypad;
