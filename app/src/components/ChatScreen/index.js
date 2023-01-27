import { useState, useEffect } from 'react'
import './ChatScreen.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import socket from '../socket'

export default function ChatScreen({ roomName, name, chat }) {
  const [text, setText] = useState("");

  function send(){
    if(text!==""){
      chat.push({ roomName, name, text })
      socket.emit("message", { roomName, name, text })
      setText("")
    }
  }

  return (
    <div className='ChatScreen'>
      <div className='chatContainer'>
        {
          chat.map((e,k)=>(
            <div key={k} className='chat'>
              <div className='name'>{e.name}</div>
              <div className='text'>{e.text}</div>
            </div>
          ))
        }
      </div>
      <div className='chatType'>
        <TextField value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type here .." variant="outlined" style={{ width:'350px' }} size="small" />&nbsp;&nbsp;
        <Button variant="contained" size="medium" onClick={()=>send()}>Send</Button>
      </div>
    </div>
  )
}
