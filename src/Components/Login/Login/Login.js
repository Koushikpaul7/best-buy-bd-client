
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();

    const location=useLocation();
      const from=location.state?.from?.pathname||'/';

    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password= passwordRef.current.value;
       signInWithEmailAndPassword(email, password);
    }

    const navigateToRegister=event=>{
        navigate('/register')
    }

    if(user){
        navigate(from,{replace:true});
    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-warning fw-bold'>Login! </h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>New to Best Buy Bd? <Link to='/register' className='text-warning pe-auto text text-decoration-none' onClick={navigateToRegister}>Please Register here</Link></p>
<SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;