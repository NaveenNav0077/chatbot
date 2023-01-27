import React from 'react'
import './Model.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import socket from '../socket'

export default function Model({ setModel, roomName, setRoomName, name, setName }) {
  return (
    <div className='Model'>
      <div className='container'>
          <TextField label="Room Name" value={roomName} onChange={(e)=>setRoomName(e.target.value)} placeholder="Enter Room Name" variant="outlined" style={{ width:'350px' }} size="small" />&nbsp;&nbsp;
          <TextField label="User Name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" variant="outlined" style={{ width:'350px' }} size="small" />&nbsp;&nbsp;
          <Button variant="contained" size="medium" 
            onClick={()=>{ 
              if(name!=="" && roomName!==""){
                    socket.emit( "JoinRoom", roomName)
                    setModel(false) 
                } else {
                    alert("RoomName or Name can not be empty !")
                }
            }}
            >Enter</Button>
      </div>
    </div>
  )
}
