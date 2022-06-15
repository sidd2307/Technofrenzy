import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Question from "../../components/Question";
import Test from "../../components/Test";
import { questions } from "../../static/data";

export default function IndividualQuestionPage() {
  const params = useParams();
  console.log(params.questionid);

  const [question, setquestion] = useState(null);

  // useEffect(() => {
  //   questions.map((item) => {
  //     console.log("item.id", item.id);
  //     console.log("params", params.questionid);
  //     if (item.id === params.questionid) {
  //       setquestion(item);
  //     }
  //     console.log(question);
  //   });
  // }, []);

  return (
    <div>
      <NavBar />
      <br />
      {questions.map((item, key) => {
        return (
          <div key={key}>
            {item.id === parseInt(params.questionid) && (
              <Question
                heading={item.heading}
                description={item.description}
                categoryNameFull={item.categoryNameFull}
                datePosted={item.datePosted}
                code={item.code}
                item={item}
              />
            )}
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
