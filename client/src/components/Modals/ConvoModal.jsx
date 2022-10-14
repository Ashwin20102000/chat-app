import React from 'react'
import {Modal,Form,Button} from 'react-bootstrap';

const ConvoModal = ({closeModal}) => {
  return (
    <>
    <Modal.Header closeButton={true}  >
      Start Conversation
    </Modal.Header>
    <Modal.Body>
      <Modal.Body>
        <Form onSubmit={e=>{
          e.preventDefault();
          //creating chat here
          closeModal();
        }}>
        
          <Button className='mt-3' type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </Modal.Body>
    </>
  )
}

export default ConvoModal