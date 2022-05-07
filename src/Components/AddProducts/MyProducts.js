import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyProduct.css'

const MyProducts = () => {
    const[myProducts, setMyProducts]=useState([]);
    const [user]=useAuthState(auth);
    useEffect(()=>{
    const getMyProducts=async()=>{
        const email=user.email;
        const url=`http://localhost:5000/myproducts?email=${email}`;
        const {data}=await axios.get(url,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        });
           
        setMyProducts(data);
    }
    getMyProducts();
},[user])
    return (
        <div className='text-center container mb-5'>
          <h3 className='mt-4'>  Added Products By  {user.email} is:
            {myProducts.length}</h3>
            <div className='mt-5 mb-5'>
            <table>
                <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Brand</th>
          </tr>
                {
                    myProducts.map(pd=>
                        <tr key={pd._id}>
                        <td>{pd.name}</td>
                        <td>{pd.price}</td>
                        <td>{pd.quantity}</td>
                        <td>{pd.company}</td>
                        </tr>)
                }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;