import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IconFull from "../assets/svg/logofull"

const Learn = () => {
  return (
    <div class="secondary-page page">
      <Container>
        <h1>Learn</h1>
        <h2>Colors</h2>
        <Container className="dark">
        <IconFull />
        </Container>
        
        <Row className="color-test-one">
          <Col>
            <div>
              <p>White</p>
            </div>
          </Col>
          <Col>
            <div>
              <p>Gray</p>
            </div>
          </Col>
          <Col>
            <div>
              <p>Black</p>
            </div>
          </Col>
        </Row>
        <Row className="color-test-two">
          <Col>
            <div>
              <p>Primary</p>
            </div>
          </Col>
          <Col>
            <div>
              <p>Secondary</p>
            </div>
          </Col>
          <Col>
            <div>
              <p>Tertiary</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Learn;
