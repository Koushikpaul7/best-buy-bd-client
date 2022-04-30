import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, error1] = useUpdateProfile(auth);


    const nameRef=useRef('');
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();

    const handleRegister= async(event)=>{
        event.preventDefault();
        const name=nameRef.current.value
        const email=emailRef.current.value;
        const password= passwordRef.current.value;

        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName: name });
        navigate('/')
       
    }
    const navigateToLogin=event=>{
        navigate('/login')
    }
    // if(user){
     
    // }
    let errorMessage;
    if(error){
        errorMessage=<p className='text-danger'>Error:{error.message}</p>
    }

    if(loading|| updating){
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-warning fw-bold'>Register! </h2>
            <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3">
  <Form.Label>Name</Form.Label>
    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
{errorMessage}
<p>Already Registered? <Link to='/login' className='text-warning pe-auto text text-decoration-none' onClick={navigateToLogin}>Please Login here</Link></p>

<SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default Register;