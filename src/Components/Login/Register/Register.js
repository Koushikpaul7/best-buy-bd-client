import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef=useRef('');
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const handleLogin=event=>{
        event.preventDefault();
        const name=nameRef.current.value
        const email=emailRef.current.value;
        const password= passwordRef.current.value;
        console.log(name,email, password);
    }
    const navigateToLogin=event=>{
        navigate('/login')
    }
    return (
        <div>
            <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-warning fw-bold'>Register! </h2>
            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3">
  <Form.Label>Name</Form.Label>
    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>Already Registered? <Link to='/login' className='text-warning pe-auto text text-decoration-none' onClick={navigateToLogin}>Please Login here</Link></p>
        </div>
        </div>
    );
};

export default Register;