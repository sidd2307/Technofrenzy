import React, { useState } from "react";
import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Sonnet from "./Sonnet";
import { categoryTags, questions } from "../static/data";

export default function Body() {
  const [selectedcategory, setselectedcategory] = useState("react");
  return (
    <div>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={categoryTags[0].categoryId}
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {categoryTags.map((item, key) => {
                return (
                  <Nav.Item key={key}>
                    <Nav.Link
                      style={{ cursor: "pointer" }}
                      eventKey={item.categoryId}
                      onClick={() => {
                        setselectedcategory(item.categoryId);
                      }}
                    >
                      {item.categoryName}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {questions.map((item, key) => {
                return (
                  <Tab.Pane key={key} eventKey={selectedcategory}>
                    {item.categoryName === selectedcategory && (
                      // <Sonnet text={item.description} />
                      <Card style={{ marginTop: 5 }}>
                        <Card.Header>{item.categoryNameFull}</Card.Header>
                        <Card.Body>
                          <Card.Title>{item.heading}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>
                          <Button variant="primary">View</Button>
                        </Card.Body>
                      </Card>
                    )}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
