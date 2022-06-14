import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Asking a good question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>To get you the best answers, we’ve provided some guidance:</h4>
        <p>
          <ul>
            <li>Summarize the problem</li>
            <li>Describe what you’ve tried</li>
            <li>When appropriate, show some code</li>
          </ul>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Go Ahead!</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function AskQuestion() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 5,
      }}
    >
      <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
        Ask a Question
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
