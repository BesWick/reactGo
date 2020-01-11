import React, { Component} from "react";
import "./ChatRoom.scss"

class ChatRoom extends Component{
    render() {
        const msgs  = this.props.chatRoom.map((msg,index) => (
            <p key = {index} > {msg.data}</p>
        ));
    

    return (
        <div className = "ChatRoom">
            <h2>Chat Room</h2>
            {msgs}
        </div>

     );
    }
}

export default ChatRoom;