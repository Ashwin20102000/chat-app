import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { keys} from "../utils/keys"

const ContactsContext = React.createContext();

 const ContactsProvider = ({ children }) => {
  const [contacts,setContacts] = useLocalStorage(keys.contactKey,[]);
  const createContacts = (contact) => {
    setContacts(prev=>[...prev,contact]);
  }
  return (
    <ContactsContext.Provider value={{contacts,createContacts}}>
      {children}
    </ContactsContext.Provider>
  )
}
export const useContacts = () => React.useContext(ContactsContext);

export default ContactsProvider;