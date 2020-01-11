import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from './components/Header/Header'
import ChatRoom from "./components/ChatRoom/ChatRoom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRoom: []
      
      }
  }


componentDidMount() {
  connect((msg) => {
    console.log("new msg")
    this.setState(prevState  => ({
        chatRoom: [...this.state.chatRoom, msg]
    }))
    console.log(this.state);
  });
}



  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatRoom chatRoom = {this.state.chatRoom} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;