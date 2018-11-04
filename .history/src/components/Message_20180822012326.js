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

() => {
  return (
    <div>
      <div className="message">
        <div className="message-username">{this.props.username}</div>
        <div className="message-text">{this.props.text}</div>
      </div>
    </div>
  );
};

export default Message;
