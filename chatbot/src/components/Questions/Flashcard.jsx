import React, { useState, useEffect } from "react";

import "./Questions.css";

const FlashCard = ({ questions,question, answer, incrementIndex }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  return (
    <div>
        {questions.map(question => (
            <div
                className="flashcard-container"
                onClick={() => setShowAnswer(!showAnswer)}
                key={question.id}
            >
                {!showAnswer && question.question}
                {showAnswer && question.answer}
            </div>

      /* {showAnswer && (
        <button onClick={incrementIndex} className="flashcard-button">
          Next question
        </button>
      )} */
        ))}
      
    </div>
  );
};

export default FlashCard;