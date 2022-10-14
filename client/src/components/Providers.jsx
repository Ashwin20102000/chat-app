import React from 'react'
import SocketProvider from '../contexts/SocketProvider'
import Dashboard from './Dashboard'
import ContactsProvider from '../contexts/ContactsProvider'
import {ConvosProvider} from '../contexts/ConvosProvider'

const Providers = (props) => {
  return (
    <SocketProvider id = {props.id} >
      <ContactsProvider>
        <ConvosProvider id={props.id}>
          <Dashboard id={props.id} setId={props.setId}  />
        </ConvosProvider>
      </ContactsProvider>
    </SocketProvider>
  )
}

export default Providers;
