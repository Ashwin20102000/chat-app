import React from 'react'
import {Tab, Nav,Button, Modal} from 'react-bootstrap'
import { keys } from '../utils/keys'
import ChatModal from './Modals/ContactModal'
import ConvoModal from './Modals/ConvoModal'
const Sidebar = ({id}) => {
  const [activeKey, setActiveKey] = React.useState(keys.convoKey)
  const [modalOpen, setModalOpen] = React.useState(false)
  const conversationsOpen = activeKey === keys.convoKey
  const closeModal = () => setModalOpen(false);
  return (
     <div style={{ width: '15rem' }} className="d-flex flex-column border border-top-0">
      <Tab.Container  activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={keys.convoKey}>Messages</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={keys.contactKey}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={keys.convoKey}>
            {/* <Conversations /> */}
          </Tab.Pane>
          <Tab.Pane eventKey={keys.contactKey}>
            {/* <Contacts /> */}
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border small">
          User Id: <span className="text-muted">{id}</span>
        </div>
        <Button variant='outline-primary' onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <ConvoModal closeModal={closeModal} /> :
          <ChatModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}

export default Sidebar