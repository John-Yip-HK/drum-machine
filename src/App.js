import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Container fluid id="outer-container">
      <Container id="drum-machine">
        <Row>
          <Col id="display">Display</Col>
        </Row>
        <Row>
          <Col>
            <>
              <Form.Switch />
              <Form.Label>Power</Form.Label>
            </>
          </Col>
          <Col>
            <>
              <Form.Range />
              <Form.Label>Volume</Form.Label>
            </>
          </Col>
          <Col>
            <>
              <Form.Switch />
              <Form.Label>Bank</Form.Label>
            </>
          </Col>
        </Row>
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
      </Container>
    </Container>
  );
}

export default App;
