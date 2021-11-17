import { React, Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import appVariables from "../custom_scripts/variables";
import { stopAudio } from "../custom_scripts/keypadHandlers";

class Controls extends Component {
  constructor(props) {
    super(props);

    this.updatePowerSwitch = this.updatePowerSwitch.bind(this);
    this.powerOnChangeHandler = this.powerOnChangeHandler.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
  }

  componentDidMount() {
    this.updatePowerSwitch(appVariables.powerOn);
    appVariables.setVolume(document.getElementById("volume-range").value);
  }

  updatePowerSwitch(state) {
    document.getElementById("power-switch").checked = state;
  }

  powerOnChangeHandler() {
    appVariables.setPower();
    stopAudio();
    this.updatePowerSwitch(appVariables.powerOn);
  }

  updateVolume() {
    appVariables.setVolume(document.getElementById("volume-range").value);
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <>
              <Form.Switch
                className="form-switch-sm form-switch-md"
                id="power-switch"
                onChange={this.powerOnChangeHandler}
              />
              <Form.Label htmlFor="power-switch">Power</Form.Label>
            </>
          </Col>
          <Col>
            <>
              <Form.Switch
                className="form-switch-sm form-switch-md"
                id="bank-switch"
                onChange={appVariables.setBankNum}
              />
              <Form.Label htmlFor="bank-switch">Bank</Form.Label>
            </>
          </Col>
        </Row>
        <Row>
          <Col>
            <>
              <Form.Range id="volume-range" onChange={this.updateVolume} />
              <Form.Label htmlFor="volume-range">Volume</Form.Label>
            </>
          </Col>
        </Row>
      </>
    );
  }
}

export default Controls;
