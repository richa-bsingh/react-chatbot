import React from "react";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "350px" }}>
        <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}/>
      </div>
    </div>
  );
}

export default App;