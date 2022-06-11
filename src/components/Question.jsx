import React from "react";

export default function Question(props) {
  return (
    <div>
      {props.heading}
      {props.description}
      {props.categoryNameFull}
    </div>
  );
}
