import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import React, { useState, useEffect } from "react"
import Pusher from "pusher-js"
import axios from "./axios"
import Login from "./Login"
import { useStateValue } from "./StateProvider"


function App() {

  const [{ user }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    })
  })

  useEffect(() => {
    const pusher = new Pusher('d5243c00f82928dd06c4', {
      cluster: 'eu',
    });

    const channel =  pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

   return  () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);


  return (
    
    <div className="app">
      {!user? (
      <Login />
      ):(
    
      <div className="app__body">
      <Sidebar />
        <Chat messages={messages} />
      </div>
        )}
    </div>
  );
}

export default App;
