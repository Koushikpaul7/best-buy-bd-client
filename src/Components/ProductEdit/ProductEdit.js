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
    },[inventoryId]);

    const handleReduce=(event)=>{
        event.preventDefault();
        const quantity=event.target.quantity.value-1;
        const updatedProduct={quantity};

        fetch(`http://localhost:5000/product/${inventoryId}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
            SetProduct(data)
        })
    }


    return (
        <div className='mt-5 '>
           <h3 className='text-center'> Product Detail of {product.name}</h3>
        <form onSubmit={handleReduce}className='w-50 mx-auto'>
            <input className='w-100 mb-2' type="text" placeholder='Name' name='name' value={product.name} required/>
            <br />
            <input className='w-100 mb-2' type="text" placeholder='Price' name='price' value={product.price} required/>
            <br />
            <input className='w-100 mb-2' type="text" placeholder='Quantity' name='quantity' value={product.quantity} required/>
            <br />
            <input type="submit" value="Delivered" />
            
        </form>





            {
                user&&<>
               <Link to='/manage'><button className='btn btn-warning  d-block w-50 mx-auto text-decoration-none'>Manage Products</button></Link> 
                </>
            }

        </div>
    );
};

export default ProductEdit;