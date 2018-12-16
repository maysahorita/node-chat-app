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

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app'
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (newMessage) => {
        console.log('newMessage', newMessage);
        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createAt: new Date().getTime()
        });

        // socket.broadcast.emit('newMessage', {
        //     from: newMessage.from,
        //     text: newMessage.text,
        //     createAt: new Date().getTime()
        // })
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
