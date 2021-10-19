import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Keypad = () => {
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
};

export default Keypad;
