
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import SocialLogin from '../../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );


    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();

    const location=useLocation();
      const from=location.state?.from?.pathname||'/';

    const handleSubmit=async event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password= passwordRef.current.value;
       await signInWithEmailAndPassword(email, password);
       const {data}=await axios.post('http://localhost:5000/login',{email});
       localStorage.setItem('accessToken',data.accessToken);
       navigate(from,{replace:true});
    }

    const navigateToRegister=event=>{
        navigate('/register')
    }

    let errorMessage;
    if(error){
        errorMessage= <p className='text-danger'>Error:{error.message}</p>
    }

    if(user){
        //navigate(from,{replace:true});
    }

    if(loading){
        return <Loading></Loading>
    }

    const resetPassword=async()=>{
        const email=emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email for reset password ');
       }
       else{
           toast('Enter your email address');
       }

    };

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
    Login
  </Button>
</Form>
{errorMessage}
<p>New to Best Buy Bd? <Link to='/register' className='text-warning pe-auto text text-decoration-none' onClick={navigateToRegister}>Please Register here</Link></p>
<p>Forgot your password? <button className='text-warning pe-auto text text-decoration-none btn btn-link' onClick={resetPassword}>Reset Password</button></p>

<SocialLogin></SocialLogin>
        <ToastContainer/>
        </div>
    );
};

export default Login;