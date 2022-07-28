const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const PORT = '5000';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) => {
    io.emit('message', message);
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
