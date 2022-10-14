import React from 'react'
import io from 'socket.io-client'
import { keys } from '../utils/keys';

const SocketContext = React.createContext();

const SocketProvider = ({id,children}) => {
  const [socket,setSocket] = React.useState();
  React.useEffect(()=>{
    const newSocket = io(keys.socketUrl,{query:{id}});
    setSocket(newSocket);
    return ()=> newSocket.close();
  },[id])
  return (
    <SocketContext.Provider value={socket} >
      {children}
    </SocketContext.Provider>
  )
}
export const useSocket = () =>  React.useContext(SocketContext);
export  default  SocketProvider;