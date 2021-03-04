import React, { useState } from 'react'
import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core"
import { AttachFile,  InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import axios from "./axios"

function Chat({messages}) {

    const [input, setInput] = useState("");

     const sendMessage = (e) => {
        e.preventDefault();

        axios.post("/messages/new", {    
            message: input,
            name: "Kay",
            timestamp: "Just now!",
            received: false
        })

        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
              <h3>Room name</h3>
              <p>Last seen at...</p>
            </div>
            <div className="chat__headerRight">
                  <IconButton>
                      <SearchOutlined />
                  </IconButton>
                  <IconButton>
                      <AttachFile />
                  </IconButton>
                  <IconButton>
                      <MoreVert />
                  </IconButton>
              </div>
            </div>
            
              <div className="chat__body">
                 {messages.map((message) => (
                     <p className={`chat__message ${message.received && "chat_receiver"}`} >
                     <span className="chat__name">{message.name}
                     </span> 
                     {message.message}
                      <span className="chat__timestamp">
                     {message.timestamp}
                  </span>
                  </p>
                 ))} 
            </div>

                <div className="chat__footer">
             <InsertEmoticon />
             <form>
                 <input 
                 value={input}
                 onChange={e => setInput(e.target.value) }
                 placeholder="Type a message"
                    type="text" 
                 />
                 <button 
                 onClick={sendMessage}
                 type="submit">Send a message</button>
             </form>
             <Mic />
            </div>
    </div>
    )
}

export default Chat