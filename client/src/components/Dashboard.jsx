import React from 'react'
import { Button} from 'react-bootstrap'
import Sidebar from './Sidebar'
const Dashboard = (props) => {
  return (
    <div style={{width:'90vw'}}>
      <div  className="d-flex w-100  m-1 justify-content-between">
        <h1>Ash Chat App</h1>
        <Button className='py-1' onClick={()=>props.setId("")} variant='outline-danger' >Log Out 🚪</Button>
      </div>
      <div className="d-flex" style={{ height: '83vh' }}>
        <Sidebar id={props.id} />
    {/* Chat Window  */}
    </div>
    </div>
  )
}

export default Dashboard