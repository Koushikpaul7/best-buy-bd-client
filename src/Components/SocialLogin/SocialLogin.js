import React from 'react';
import auth from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();

    let errorMessage;
    if(error){
        errorMessage=<p className='text-danger'>Error:{error.message}</p>
    }
    if(user){
        navigate('/');
    }


    return (
        <div>
            <hr className='text-warning mb-5 ' />
            {errorMessage}

            <button onClick={()=>signInWithGoogle()} className='btn btn-primary shadow d-block w-50 mx-auto mb-5'>Google Signin</button>
        </div>
    );
};

export default SocialLogin;