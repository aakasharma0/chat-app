const express=require('express');
const app=express()
const http=require('http');
const socketio=require('socket.io');
const path =require('path');

const server=http.createServer(app);
const io=socketio(server);

app.use('/',express.static(path.join(__dirname,'/public')));

 const users={}

io.on('connection',(socket)=>{
    // console.log(` Connection Established ${socket.id}`)
    socket.on('send-msg',(data)=>{
        io.emit('rec-msg',{
            msg:data.msg,
            user:users[socket.id]
        })
    })
    socket.on('login',(data)=>{
         users[socket.id]=data.user;
         //creating key value pair;
    })
})



 const port  = process.env.Port || 3000;
server.listen(port,()=>{
    console.log('connected');
})

