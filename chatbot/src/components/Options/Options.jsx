import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Support",
      handler: props.actionProvider.handleQuestions,
      id: 1,
    },
    { text: "Features", handler: () => {}, id: 2 },
    { text: "Issues", handler: () => {}, id: 3 },
    { text: "Feedback", handler: props.actionProvider.handleFeedbackForm, id: 4 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;