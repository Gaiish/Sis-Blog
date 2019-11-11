// TODO: Login page
// allow the author/blog owner to login
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner
} from "react-bootstrap";

import firebase from "firebase/app";
import "firebase/auth";

import Router from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    setLoading(true);

    if (email.trim().length > 0 && password.trim().length > 0) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          // signed in
          Router.replace("/write");
        })
        .catch(err => {
          setLoading(false);
          setErrMsg("Your email or password is incorrect.");
        });
    }
  };

  useEffect(() => {
    if (errMsg) {
      setErrMsg(null);
    }
  }, [email, password]);

  return (
    <Container>
      <Col xs="12" md={{ span: 6, offset: 3 }}>
        <div className="login-form">
          <h3>👋 Hi! Login to create your blogs ✍🏾 </h3>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="jane@gmail.com"
                onChange={handleEmailInput}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePasswordInput}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            {/* if there is an error */}
            {errMsg && <Alert variant={"danger"}>{errMsg}</Alert>}

            {/* loader */}
            {loading && <Spinner animation="border" />}
            <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Col>

      <style jsx>
        {`
          .login-form {
            margin-top: 90px;
          }
          .login-form h3 {
            margin-bottom: 20px;
          }
        `}
      </style>
    </Container>
  );
}

export default Login;
