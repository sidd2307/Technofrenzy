import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store";

export default function NavBar() {
  const { userInfo } = useUserStore();
  const removeUser = useUserStore((state) => state.removeUser);
  const navigate = useNavigate();
  return (
    <div>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            >
              TechnoFrenzy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {userInfo.name !== undefined
                    ? `Hi ${userInfo.name}`
                    : `TechnoFrenzy`}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link
                    // href="#action2"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    // href="#action2"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </Nav.Link>
                  {userInfo.name !== undefined ? (
                    <>
                      <Nav.Link
                        // href="#action2"
                        onClick={() => {
                          removeUser();
                          navigate("/register");
                        }}
                        style={{ color: "red" }}
                      >
                        Logout
                      </Nav.Link>
                    </>
                  ) : (
                    <></>
                  )}
                  {/* <Nav.Link
                    // href="#action2"
                    onClick={() => {
                      removeUser();
                      navigate("/register");
                    }}
                    style={{ color: "red" }}
                  >
                    Logout
                  </Nav.Link> */}
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
