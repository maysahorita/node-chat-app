const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'mike@example.com',
        text: 'Hey, What is goung on.',
        createdAt: 123 
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });

    socket.on('createMessage', (newMessage) => {
        console.log('newMessage', newMessage)
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
