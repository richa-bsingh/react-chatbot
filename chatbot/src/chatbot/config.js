import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import Options from "../components/Options/Options";
import Questions from "../components/Questions/Questions";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm";


const config = {
    botName: "UserAidBot",
    initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to know about?"
    , {
      widget: "options"
    })],
    widgets: [
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },
      {
        widgetName: "questions",
        widgetFunc: (props) => <Questions {...props} />,
        props: {
          questions: [
            {
              question: "How can I contact the support team?",
              answer: "Create a SNOW incident and assign it to Dealer insights tier 3.",
              id: 1,
            },
            {
              question: "How can I provide feedback to the team?",
              answer: "Go to the application and click on User feedback link and fill in the form.",
              id:2,
            },
          ],
        },
      },
      {
        widgetName: "feedbackform",
        widgetFunc: (props) => <FeedbackForm {...props}/>,
      },

    ],
    customStyles: {
      botMessageBox: {
        backgroundColor: "#376B7E",
      },
      chatButton: {
        backgroundColor: "#376B7E",
      },
    },
}

export default config