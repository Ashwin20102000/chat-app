import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { keys } from "../utils/keys"
import { useContacts } from './ContactsProvider';
import { useSocket } from './SocketProvider';
import { formatConversation } from '../utils/formatter'

const ConvosContext = React.createContext();

export const ConvosProvider = ({id,children}) => {

  const [conversation,setConversation] = useLocalStorage(keys.convoKey,[]);
  const [selectedConvos,setSelectedConvos] = React.useState(0);
  const { contacts } = useContacts();  
  const socket = useSocket();
  const createConversation = (recipient) => setConversation(prev=>[...prev,recipient]);
  const sendMessage = (recipient,message) => {
    socket.emit('send-message',{recipents,message});
    addMessage({recipents,id,message});
  }


  const arrayCheck = (a, b) =>  {
    if (a.length !== b.length) return false
    a.sort()
    b.sort()
    return a.every((element, index) => {
      return element === b[index]
    })
  }

  const addMessage = React.useCallback(({recipients,sender,message})=>{
    setConversation(prev=>{
      let isChanged =false;
      const newConvos = prev.map(convo=>{
        if(arrayCheck(convo.recipients,recipients)){
          isChanged=true;
          return {...conversation,messages:[...conversation.messages,{sender,message}]};
        }
        return conversation;
      })
    })
  },[setConversation]);
  
  React.useEffect(()=>{
    if(!socket)return;
    socket.on('recieve-message',addMessage);
    return () => socket.off('recieve-message')  
  },[socket,addMessage]);

  const formatConvo  = formatConversation(conversation,contacts,id,selectedConvos);
  const value = {
    conversation: formatConvo,
    selectedConversation:formatConversation[selectedConvos],
    sendMessage,
    selectedConversationIndex:selectedConvos,
    createConversation
  }
  return (
   <ConvosContext.Provider value={value}>
    {children}
   </ConvosContext.Provider>

  )
}

export const useConvos = () => React.useContext(ConvosContext);