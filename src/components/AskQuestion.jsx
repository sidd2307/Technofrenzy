import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
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
        <h6>To get you the best answers, we’ve provided some guidance:</h6>
        <ul>
          <li>Explain the problem clearly</li>
          <li>Show the approach you tried</li>
          <li>If possible, show some code</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            navigate("/askquestion");
          }}
        >
          Go Ahead!
        </Button>
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
