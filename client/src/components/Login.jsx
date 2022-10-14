import React from 'react'
import  { Button , Form ,InputGroup} from 'react-bootstrap'
import uuid from 'react-uuid'
const Login = (props) => {
  const inputRef = React.useRef();
  const createId = () => {
    props.submitId(uuid());
  }
  const formSubmit = (e) => {
    e.preventDefault();
    props.submitId(inputRef.current.value);
  }
  return (
    <div style={{width:"98vw"}} className='d-flex justify-content-center '>      
     <div style={{height:"19rem"}} className='d-flex p-5 rounded  align-items-center border'>
      <Form onSubmit={formSubmit}>
        <Form.Group>
          <Form.Label>
            <h3>
            Ash Chat App
            </h3>
          </Form.Label>
          <Form.Control   
            className='shadow-none'
            placeholder="Enter ID"
            ref={inputRef}
          >
          </Form.Control>
        </Form.Group>
        <div className="my-3">
          <Button className=' me-2' type='submit'>Login</Button>
          <Button onClick={createId}  variant='secondary' >Create ID</Button>
        </div>
        <small className="text-muted ">
         ( If you don't have just create one)
        </small>
      </Form>
      </div>
    </div>
  )
}

export default Login