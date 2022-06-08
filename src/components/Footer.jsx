import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container className="footer">
            <Navbar.Brand>TechnoFrenzy</Navbar.Brand>
            <Navbar.Brand style={{ color: "gray" }}>
              Developed with ❤️ by Siddheshwar Panda
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
