// import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

type Props = {}

const Login = (props: Props) => {
  return (
    <Form className='Frm'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Remember me' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default Login
