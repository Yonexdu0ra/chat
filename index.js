const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);

const io = new Server(server)

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
   console.log('có thằng login o.O')
   socket.on('on-chat', data => {
      io.emit('user-chat', data)
   })
})

server.listen(5000, () => {
   console.log('ok rồi em vào connect vào port 5k đê')
})
