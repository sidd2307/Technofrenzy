import React from "react";
import "./css/question.css";

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
        <h4>8 Answers</h4>

        <Card>
          <Card.Header>posted by Siddheshwar</Card.Header>
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
              Ensure that your array is sorted since this is the crux of a
              binary search. Any indexed/random-access data structure can be
              binary searched. So when you say using "just an array", I would
              say arrays are the most basic/common data structure that a binary
              search is employed on. You can do it recursively (easiest) or
              iteratively. Time complexity of a binary search is O(log N) which
              is considerably faster than a linear search of checking each
              element at O(N). Here are some examples from Wikipedia: Binary
              Search Algorithm:
            </Card.Text>
            <Card.Text>
              <div
                className="code_display"
                dangerouslySetInnerHTML={{
                  __html: markdownParser.render(
                    `\`\`\` ${technology}\n${codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                      if (high < low)  
                          return -1 // not found  
                      mid = low + ((high - low) / 2) 
                      if (A[mid] > value)  
                          return BinarySearch(A, value, low, mid-1)  
                      else if (A[mid] < value)  
                          return BinarySearch(A, value, mid+1, high)  
                      else
                         return mid // found
                      }`)}\n\`\`\``
                  ),
                }}
              />
            </Card.Text>
            <Button variant="success">Upvote</Button> &nbsp;
            <Button variant="danger">Downvote</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
