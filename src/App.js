import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Container fluid id="outer-container">
      <Container id="drum-machine">
        <Row>
          <Col>Power Switch</Col>
          <Col id="display">Display</Col>
          <Col>Bank Switch</Col>
        </Row>
        <Row>
          <Col>Volume Knob</Col>
        </Row>
        <Row id="drum-pads">
          <Table bordered>
            <tbody>
              <tr>
                <td class="drum-pad">
                  Q
                  <audio
                    id="Q"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                  />
                </td>
                <td class="drum-pad">
                  W
                  <audio id="W" src="" />
                </td>
                <td class="drum-pad">
                  E
                  <audio id="E" src="" />
                </td>
              </tr>
              <tr>
                <td class="drum-pad">
                  A
                  <audio id="A" src="" />
                </td>
                <td class="drum-pad">
                  S
                  <audio id="S" src="" />
                </td>
                <td class="drum-pad">
                  D
                  <audio id="D" src="" />
                </td>
              </tr>
              <tr>
                <td class="drum-pad">
                  Z
                  <audio id="Z" src="" />
                </td>
                <td class="drum-pad">
                  X
                  <audio id="X" src="" />
                </td>
                <td class="drum-pad">
                  C
                  <audio id="C" src="" />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
