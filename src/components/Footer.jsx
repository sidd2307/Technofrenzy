import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./css/footer.css";

export default function Footer() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container className="footer">
            <Navbar.Brand>TechnoFrenzy</Navbar.Brand>
            <Navbar
              style={{
                color: "#D0D0D0",
                fontSize: 15,
                flexWrap: "wrap",
                textAlign: "center",
              }}
            >
              Conceptualised, Designed and Developed by Siddheshwar Panda
            </Navbar>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
