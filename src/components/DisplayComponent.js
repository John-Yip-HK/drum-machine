import React from "react";
import { Row, Col } from "react-bootstrap";

const Display = () => {
  return (
    <>
      <Row>
        <Col id="display">
          <h3>
            <span id="display-content">&nbsp;</span>
          </h3>
        </Col>
      </Row>
    </>
  );
};

export default Display;
