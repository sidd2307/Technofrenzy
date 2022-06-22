import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { serverurl } from "../../api";
import "../../css/formpage.css";

import useUserStore from "../../store";

export default function Login() {
  const addUser = useUserStore((state) => state.addUser);
  let navigate = useNavigate();
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(false);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    console.log(inputs);

    axios
      .post(`${serverurl}/api/auth/login`, {
        email: inputs.email,
        password: inputs.password,
      })
      .then((response) => {
        console.log(response);

        if (response.status === 201) {
          seterror(false);
          setsuccess(true);
          addUser(response.data.response);
          navigate("/");
        } else {
          seterror(true);
          setsuccess(false);
        }
        console.log(response.data.response);
      });
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
