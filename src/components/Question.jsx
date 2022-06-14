import React from "react";
import "./question.css";

// utils
import getAge from "../utils/getAge";

export default function Question(props) {
  const temp = getAge(props.datePosted);
  return (
    <div className="questioncomponent">
      <div className="heading">
        <h1>{props.heading}</h1>

        <h6>{temp}</h6>
      </div>
      {props.description}
      {props.categoryNameFull}
    </div>
  );
}
