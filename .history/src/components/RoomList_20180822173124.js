import React from "react";

class RoomList extends React.Component {
  render() {
    console.log(this.props.rooms);
    return (
      <div className="rooms-list">
        <div className="help-text">Rooms:</div>
      </div>
    );
  }
}

export default RoomList;
