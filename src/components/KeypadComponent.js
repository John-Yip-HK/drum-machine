import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Keypad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      for (let keypad of document.querySelectorAll(".drum-pad")) {
        if (keypad.innerHTML == event.key.toUpperCase())
          keypad.style.backgroundColor = "#123456";
      }
    });

    document.addEventListener("keyup", () => {
      for (let keypad of document.querySelectorAll(".drum-pad"))
        keypad.style.backgroundColor = "#495057";
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", () =>
      console.log("keydown listener removed.")
    );
    document.removeEventListener("keyup", () =>
      console.log("keyup listener removed.")
    );
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
