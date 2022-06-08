import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Register() {
  let navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <h1 style={{ marginBottom: 20 }}>Sign Up</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

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
          <Button variant="primary" type="submit" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => navigate("/login")}
          >
            Have an account?
          </Button>
        </div>
      </Form>
    </div>
  );
}
