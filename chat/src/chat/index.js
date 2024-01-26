import React, { useState } from 'react';
import Socket from 'socket.io-client';

const SERVER_URL = 'localhost:5000';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const socket = Socket(SERVER_URL);

  socket.on('message', (msg) => {
    setMessages([...messages, msg]);
  });

  return (
    <>
      <h1>Chat</h1>
      <input onChange={(event) => setMessage(event.target.value)} />
      <button onClick={() => socket.emit('message', message)}>Send</button>

      <hr></hr>

      <div>
        {messages.map((msg) => (
          <p>{msg}</p>
        ))}
      </div>
    </>
  );
};
