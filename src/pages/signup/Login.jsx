import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  let navigate = useNavigate();
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(true);

  const handleSignIn = (e) => {
    setsuccess(true);
    seterror(false);
    e.preventDefault();
  };

  return (
    <div className="login">
      <h1 style={{ marginBottom: 20 }}>Sign In</h1>
      {success && (
        <Alert variant="success" onClose={() => setsuccess(false)} dismissible>
          Signed in successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => seterror(false)} dismissible>
          Wrong username or password!
        </Alert>
      )}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="primary" type="submit" onClick={handleSignIn}>
            Sign In
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => navigate("/register")}
          >
            New to Technofrenzy?
          </Button>
        </div>
      </Form>
    </div>
  );
}
