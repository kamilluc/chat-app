import React from "react";

// class Message extends React.Component {
//   render() {
//     return (
//       <div className="message">
//         <div className="message-username">{this.props.username}</div>
//         <div className="message-text">{this.props.text}</div>
//       </div>
//     );
//   }
// }

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

// export default Message;
