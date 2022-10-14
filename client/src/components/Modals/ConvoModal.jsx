import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../../contexts/ContactsProvider';
import { useConvos } from '../../contexts/ConvosProvider';


const ConvoModal = ({closeModal}) => {
  const [selectedContactIds, setSelectedContactIds] = React.useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConvos();
  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds(prevSelectedContactIds => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }
  return (
    <>
    <Modal.Header closeButton={true}  >
      Start Conversation
    </Modal.Header>
    <Modal.Body>
      <Modal.Body>
        <Form onSubmit={e=>{
          e.preventDefault();
          createConversation(selectedContactIds)
          closeModal();
        }}>
           {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
        
          <Button className='mt-3' type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </Modal.Body>
    </>
  )
}

export default ConvoModal;
