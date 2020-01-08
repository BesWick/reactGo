package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func wsHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	//upgrades HTTP conn to a websocket connection
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}

	//echoing msgs
	for {
		msgType, msg, err := conn.ReadMessage()
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(string(msg))

		if err := conn.WriteMessage(msgType, msg); err != nil {
			log.Fatal(err)
		}
	}

}

//routing
func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple Server")

	})
	http.HandleFunc("/ws", wsHandler)
}

func main() {
	setupRoutes()
	http.ListenAndServe(":8080", nil)

}
