import React from 'react'
import {Modal,Form,Button} from 'react-bootstrap';
const ContactModal = ({closeModal}) => {
  const idRef = React.useRef();
  const nameRef = React.useRef();
  return (
    <>
    <Modal.Header closeButton={true}  >
      Save Contact
    </Modal.Header>
    <Modal.Body>
      <Modal.Body>
        <Form onSubmit={e=>{
          e.preventDefault();
          //creating contact here
          closeModal();
        }}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button className='mt-3' type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </Modal.Body>
    </>
  )
}

export default ContactModal