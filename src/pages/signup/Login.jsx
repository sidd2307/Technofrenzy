import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  let navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <h1 style={{ marginBottom: 20 }}>Sign In</h1>
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
