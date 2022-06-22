import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { serverurl } from "../../api";
import "../../css/formpage.css";

export default function Register() {
  let navigate = useNavigate();
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(false);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log(inputs);

    axios
      .post(`${serverurl}/api/auth/register`, {
        email: inputs.email,
        password: inputs.password,
        name: inputs.name,
      })
      .then((response) => {
        console.log(response);

        if (response.status === 201) {
          seterror(false);
          setsuccess(true);
          navigate("/login");
        } else {
          seterror(true);
          setsuccess(false);
        }
        console.log(response.data.response);
      });
  };
  return (
    <div className="login">
      <h1 style={{ marginBottom: 20 }}>Sign Up</h1>
      {success && (
        <Alert variant="success" onClose={() => setsuccess(false)} dismissible>
          Signed up successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => seterror(false)} dismissible>
          Wrong username or password!
        </Alert>
      )}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            value={inputs.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={inputs.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
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
