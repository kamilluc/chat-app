import React from "react";

const Message = ({ username, text }) => {
  return (
    <div>
      <div className="message">
        <div className="message-username">{username}</div>
        <div className="message-text">{text}</div>
      </div>
    </div>
  );
};

export default Message;
