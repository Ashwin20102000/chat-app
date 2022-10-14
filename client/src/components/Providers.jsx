import React from 'react'
import SocketProvider from '../contexts/SocketProvider'
import Dashboard from './Dashboard'

const Providers = (props) => {
  return (
    <SocketProvider id = {props.id} >
      <Dashboard id={props.id} setId={props.setId}  />
    </SocketProvider>
  )
}

export default Providers