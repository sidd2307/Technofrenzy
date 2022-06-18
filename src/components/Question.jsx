import React from "react";
import "../css/question.css";

// utils
import getAge from "../utils/getAge";
import markdownParser from "../utils/markdownParser";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { Card, Button } from "react-bootstrap";
import codetostring from "../utils/codeToString";
hljs.registerLanguage("javascript", javascript);

export default function Question(props) {
  const technology = "javascript";
  const temp = getAge(props.datePosted);

  console.log(props.item);

  console.log(props.code);
  return (
    <div className="questioncomponent">
      <div className="heading">
        <h1>{props.heading}</h1>

        <h6>{temp}</h6>
      </div>
      {props.description}
      {props.categoryNameFull}

      <br />
      <div
        className="code_display"
        dangerouslySetInnerHTML={{
          __html: markdownParser.render(
            `\`\`\` ${technology}\n${props.code}\n\`\`\``
          ),
        }}
      />

      <div>
        <h4>{props.item.answers.length} Answers</h4>

        {props.item.answers.map((answer, key) => {
          return (
            <Card
              key={key}
              style={{ padding: 5, backgroundColor: "lightgray", margin: 5 }}
            >
              <Card.Header>
                posted by {answer.author} &nbsp; &nbsp; &nbsp;{" "}
                <span style={{ color: "#198754", fontWeight: "bolder" }}>
                  {answer.upvotes} upvotes
                </span>{" "}
                &nbsp;&nbsp;&nbsp;{" "}
                <span style={{ color: "#DC3545", fontWeight: "bolder" }}>
                  {answer.downvotes} downvotes
                </span>
              </Card.Header>
              <Card.Body>
                <Card.Text>{answer.explanation}</Card.Text>
                <Card.Text>
                  <div
                    className="code_display"
                    dangerouslySetInnerHTML={{
                      __html: markdownParser.render(
                        `\`\`\` ${technology}\n${codetostring(
                          answer.codeexplanation
                        )}\n\`\`\``
                      ),
                    }}
                  />
                </Card.Text>
                <Button variant="success">Upvote</Button> &nbsp;
                <Button variant="danger">Downvote</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
