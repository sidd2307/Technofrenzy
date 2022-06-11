import React, { useState } from "react";
import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Sonnet from "./Sonnet";
import { categoryTags, questions } from "../static/data";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Body() {
  const [selectedcategory, setselectedcategory] = useState("react");
  let navigate = useNavigate();
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
                          <Card.Text>
                            {item.description.substring(0, 197)}
                            <span
                              style={{
                                color: "gray",
                                fontWeight: "bolder",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                navigate(`/question/${item.id}`);
                              }}
                            >
                              &nbsp; read more...
                            </span>
                          </Card.Text>
                          {/* <div
                            style={{
                              width: 200,
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <BiUpvote color="green" size={35} />
                            </div>
                            <BiDownvote color="red" size={35} /> */}
                          <Button
                            onClick={() => {
                              navigate(`/question/${item.id}`);
                            }}
                            variant="primary"
                          >
                            View
                          </Button>
                          {/* </div> */}
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
