import React, { useState } from "react";

import FlashCard from "./Flashcard";

const Questions = (props) => {
  console.log(props);
  let [questionIndex, setQuestionIndex] = useState(0);

  const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

  const currentQuestion = props.questions[questionIndex];

//   if (!currentQuestion) {
//     return <p>Questions over.</p>;
//   }

  return (
    <FlashCard
      questions={props.questions}
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      incrementIndex={incrementIndex}
    />
  );
};

export default Questions;