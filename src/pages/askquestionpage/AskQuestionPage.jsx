import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/formpage.css";

export default function AskQuestionPage() {
  let navigate = useNavigate();
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(true);

  const handleSignIn = (e) => {
    setsuccess(true);
    seterror(false);
    e.preventDefault();
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
          <Form.Control type="text" placeholder="Enter heading" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Code</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Select aria-label="Select Tags">
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
