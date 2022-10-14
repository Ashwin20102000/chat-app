import { Server } from 'socket.io';
const io = new Server(8000,{
  cors:{
    origin:"http://localhost:5174",
    methods:["GET","POST"]
  }
});
io.on("connection",socket=>{
  const id = socket.handshake.query.id;
  socket.join(id);
  
  socket.on("send-message",({recipents,message})=>{
    recipents.forEach((recipent)=>{
      let newRecipients = recipents.filter(rec=>rec!==recipent);
      newRecipients.push(id);
      socket.broadcast.to(recipent).emit("recieve-message",{
        recipents:newRecipients,
        sender:id,
        message
      });
    })
  })
})