import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const Controls = () => {
  return (
    <>
      <Row>
        <Col>
          <>
            <Form.Switch />
            <Form.Label>Power</Form.Label>
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
        <Col>
          <>
            <Form.Range />
            <Form.Label>Volume</Form.Label>
          </>
        </Col>
      </Row>
    </>
  );
};

export default Controls;
