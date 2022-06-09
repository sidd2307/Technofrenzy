import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Sonnet from "./Sonnet";

export default function Body() {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="reactjs">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link style={{ cursor: "pointer" }} eventKey="reactjs">
                  ReactJS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ cursor: "pointer" }} eventKey="angularjs">
                  Angular
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ cursor: "pointer" }} eventKey="nodejs">
                  NodeJS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ cursor: "pointer" }} eventKey="django">
                  Django
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ cursor: "pointer" }} eventKey="reactnative">
                  React-Native
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="reactjs">
                <Sonnet text="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies." />
              </Tab.Pane>
              <Tab.Pane eventKey="angularjs">
                <Sonnet text="Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS." />
              </Tab.Pane>
              <Tab.Pane eventKey="nodejs">
                <Sonnet text="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser." />
              </Tab.Pane>
              <Tab.Pane eventKey="django">
                <Sonnet text="Django is a Python-based web framework, free and open-source, that follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit." />
              </Tab.Pane>
              <Tab.Pane eventKey="reactnative">
                <Sonnet text="React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities." />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
