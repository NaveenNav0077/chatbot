import { useState, useEffect } from 'react'
import './App.css';
import Model from './components/Model'
import ChatScreen from './components/ChatScreen'
import socket from './components/socket'

function App() {
  const [model, setModel] = useState(true);
  const [chat, setChat] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [name, setName] = useState("");

  useEffect(()=>{
    socket.on("message",(message)=>{
      setChat([...chat, message])
    })
  },[chat.length])

  return (
    <div className="App">
      { 
        model ? 
            <Model setModel={setModel} roomName={roomName} setRoomName={setRoomName} name={name} setName={setName}  /> 
          : <ChatScreen roomName={roomName} name={name} chat={chat} />
      }
    </div>
  );
}

export default App;
