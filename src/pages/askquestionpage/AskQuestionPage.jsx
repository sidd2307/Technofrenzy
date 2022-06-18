import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import codetostring from "../../utils/codeToString";
import "../../css/formpage.css";

export default function AskQuestionPage() {
  let navigate = useNavigate();
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(true);

  const [postedquestion, setpostedquestion] = useState({});

  const handleSignIn = (e) => {
    setsuccess(true);
    seterror(false);
    e.preventDefault();
    console.log(postedquestion);

    const res = codetostring(postedquestion.code);

    console.log(res);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setpostedquestion((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="loginbig">
      <h1 style={{ marginBottom: 20 }}>Ask a Question</h1>
      {success && (
        <Alert variant="success" onClose={() => setsuccess(false)} dismissible>
          Question submitted successfully!{" "}
          <a style={{ textDecoration: "underline", cursor: "pointer" }}>
            View Here!
          </a>
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => seterror(false)} dismissible>
          Question not submitted!
        </Alert>
      )}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Heading</Form.Label>
          <Form.Control
            type="text"
            name="heading"
            value={postedquestion.heading || ""}
            onChange={handleChange}
            placeholder="Enter heading"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={postedquestion.description || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Code</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="code"
            value={postedquestion.code || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Select
          aria-label="Select Tags"
          name="tag"
          value={postedquestion.tag || ""}
          onChange={handleChange}
        >
          <option>Select Tags</option>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="nodejs">NodeJS</option>
          <option value="django">Django</option>
          <option value="reactnative">React-Native</option>
        </Form.Select>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="primary" type="submit" onClick={handleSignIn}>
            Post!
          </Button>
          <Button variant="primary" type="submit" onClick={() => navigate("/")}>
            Back to HomePage
          </Button>
        </div>
      </Form>
    </div>
  );
}
