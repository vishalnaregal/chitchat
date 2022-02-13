const path = require('path')
const http = require('http')
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messges');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


// set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'ChatCord Bot';

//run when user connect
io.on('connection', socket => {
    socket.on('joinRoom', ({username, room }) => {
     const uuser = userJoin(socket.id, username, room);

     socket.join(user.room);

        socket.emit('message', formatMessage(botName,'welcome to chit chat'));

    //broadcast when user connects
        socket.broadcast.to(user.room)emit('message', formatMessage(botName, `$(user.username) has joined`));
    });


    //send users nd room info
    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
    });
    });

    

    //disconnect
    socket.on('disconnect', () => {

        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit('message', formatMessage(botName, 'a user has left the chat'));
    };

    //send users nd room info
    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
    });
});


    //listen chat messsage
    socket.on('chat message', msg => {
        

        const user = getCurrentUser(socket.id);


        io.to(user.room)emit('message', formatMessage(user.username, msg));
    })
});

const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
