class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
    parse(message) {

      console.log(message)
      const lowerCaseMessage = message.toLowerCase()
    
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
      this.actionProvider.greet();
    }

      if(lowerCaseMessage.includes("support")){
        this.actionProvider.handleQuestions();
      }

      if(lowerCaseMessage.includes("feedbackform") || lowerCaseMessage.includes("feedback") || lowerCaseMessage.includes("form")) {
        this.actionProvider.handleFeedbackForm();
      }
    }
  }
  
  export default MessageParser;