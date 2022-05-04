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
    },[product]);

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


    const handleAddQuantity=(event)=>{
        event.preventDefault();
        const newQuantity=event.target.add.value;
        const quantity=product.quantity+Number(newQuantity);
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
        <div className='mt-5 container '>
           <h3 className='text-center'> Product Detail of {product.name}</h3>
        <form onSubmit={handleReduce}className='w-50 mx-auto'>
            <input className='w-100 mb-2' type="text" placeholder='Name' name='name' value={product.name} required/>
            <br />
            <input className='w-100 mb-2' type="text" placeholder='Price' name='price' value={product.price} required/>
            <br />
            <input className='w-100 mb-2' type="text" placeholder='Quantity' name='quantity' value={product.quantity} required/>
            <br />
            <input className='btn btn-info my-4 fw-bold shadow' type="submit" value="Delivered" />
            
        </form>


        <form onSubmit={handleAddQuantity} className='w-50 mx-auto'>
            <input className='w-100 rounded shadow mb-3 mt-4' type="text" placeholder='Add quantity' name='add' />
            <br />
            <input className='btn btn-success px-4 mb-4' type="submit" value="Add " />
        </form>


            {
                user&&<>
               <Link to='/manage'><button className='btn btn-warning  d-block w-50 mx-auto text-decoration-none mb-5'>Manage Products</button></Link> 
                </>
            }

        </div>
    );
};

export default ProductEdit;