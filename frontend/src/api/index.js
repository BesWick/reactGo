// api/index.js
var socket = new WebSocket("ws://localhost:8080/ws");

//first function responsible for connection to websocket endpoint and 
//listening for events
let connect = cb => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = msg => {
    console.log(msg);
    cb(msg); //callback func
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
};

//() responsible for sending msg to the websocket
let sendMsg = msg => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };