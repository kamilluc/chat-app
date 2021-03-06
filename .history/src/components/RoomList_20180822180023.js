import React from "react";

class RoomList extends React.Component {
  render() {
    // console.log(this.props.rooms);
    return (
      <div className="rooms-list">
        {/* <div className="help-text">Rooms:</div> */}
        <ul>
          <h3>Your rooms:</h3>
          {this.props.rooms.map(room => {
            return (
              <li key={room.id} className="room">
                <a
                  onClick={() => {
                    this.props.subscribeToRoom(room.id);
                  }}
                  href="#"
                >
                  # {room.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomList;
