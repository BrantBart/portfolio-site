import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Icon from "../../assets/svg/logoicon";
import IconFull from "../../assets/svg/logofull";

import FB from "../../assets/svg/social-media-logos/facebook";
import YT from "../../assets/svg/social-media-logos/youtube";
import LI from "../../assets/svg/social-media-logos/linkedin";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./signup.scss";
import { Container } from "react-bootstrap";

const SignUp = () => {
  return (
    <div className="signup-form">
      <Form className="m-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Icon />

          <Form.Control type="text" placeholder="username" />
        </Form.Group>
        <Button type="submit">Sign In</Button>
        <Container className="options">
          <p>
            <a href="#">Forgot Username</a> - <a href="#">Create Account</a>
          </p>
        </Container>
        <Row className="mt-3">
          <Col>
            <LI />
          </Col>
          <Col>
            <FB />
          </Col>
          <Col>
            <YT />
          </Col>
        </Row>
        <IconFull />
      </Form>
    </div>
  );
};

export default SignUp;
