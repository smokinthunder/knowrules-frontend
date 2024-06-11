import React, { useState } from 'react';
import './Style/ChatroomComponent.css'; // Assuming you have the CSS styles in a file named ChatroomComponent.css
import botResponses from './api/botResponses.json'; // Import the JSON file with bot responses

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [responseIndex, setResponseIndex] = useState(0);

  const handleButtonClick = (response) => {
    const newMessage = {
      text: response,
      isUserMessage: true,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Get the bot response from the JSON file
    const botResponse = {
      text: botResponses.responses[responseIndex],
      isUserMessage: false,
    };

    // Update the response index to get the next response on the next button click
    setResponseIndex((prevIndex) => (prevIndex + 1) % botResponses.responses.length);

    setMessages((prevMessages) => [...prevMessages, botResponse]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUserMessage ? 'chat-message user-message' : 'chat-message bot-message'}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-buttons">
        <button className='response-button' onClick={() => handleButtonClick('Yes')}>Yes</button>
        <button className='response-button' onClick={() => handleButtonClick('No')}>No</button>
      </div>
    </div>
  );
};

export default Chatbot;
