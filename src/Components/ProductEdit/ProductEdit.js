import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ProductEdit = () => {
    const[user]=useAuthState(auth);
   
    const {inventoryId}=useParams();
    const [product,SetProduct]=useState({});
    useEffect(()=>{
        const url=`http://localhost:5000/product/${inventoryId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>SetProduct(data));
    },[])
    return (
        <div className='mt-5 '>
           <h3 className='text-center'> Product Detail of {product.name}</h3>
            {
                user&&<>
               <Link to='/manage'><button className='btn btn-warning  d-block w-50 mx-auto text-decoration-none'>Manage Products</button></Link> 
                </>
            }

        </div>
    );
};

export default ProductEdit;