import React, { Component} from "react";
import "./ChatRoom.scss"

class ChatRoom extends Component{
    render() {
        const msgs  = this.props.chatHistory.map((msg,index) => (
            <p key = {index} > {msg.data}</p>
        ));
    

    return (
        <div className = "ChatRoom">
            <h2>Chat History</h2>
            {msg}
        </div>

     );
    }
}

export default ChatRoom;