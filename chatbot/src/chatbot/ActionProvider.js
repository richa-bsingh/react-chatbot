class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  greet(n) {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }

  handleQuestions = () =>{
    const message = this.createChatBotMessage("Here are a few questions to look up."
    , {
      widget: "questions",
    });
    this.updateChatbotState(message);
  }

  handleFeedbackForm = () =>{
    const message = this.createChatBotMessage("Here is the feedback form."
    , {
      widget: "feedbackform",
    });
    this.updateChatbotState(message);
  }
  
  updateChatbotState(message) {
 
// NOTE: This function is set in the constructor, and is passed in     
 // from the top level Chatbot component. The setState function here     
 // actually manipulates the top level state of the Chatbot, so it's     
 // important that we make sure that we preserve the previous state.
 
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider