import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import UseProducts from '../../Hooks/UseProducts';
import Loading from '../Login/Loading/Loading';

const ManageProducts = () => {
    const[products,setProducts]=UseProducts();
    const[user]=useAuthState(auth);


    const handleDelete=id=>{
        const proceed= window.confirm('are you sure to remove the product');
        if(proceed){
            const url=`  https://shielded-bayou-98434.herokuapp.com/product/${id}`;
            fetch(url,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining=products.filter(product=>product._id!==id)
                setProducts(remaining)
            })
        }
    }
    if(products.length===0){
        return<Loading></Loading>
    }


    return (
        <div>
           <h2 className='text-center text-warning'>Manage your products!</h2> 

           {
               products.map(product=><div className='container card shadow p-3 my-5 mx-auto w-50 text-center' key={product._id}>
                <img style={{height:'200px'}} src={product.picture} alt="" />
                <h4>{product.name}</h4>
                <h5>Price:{product.price}</h5>
                <h6 className='mb-5'>Quantity:{product.quantity}</h6>
                <button onClick={()=>handleDelete(product._id)} className='btn btn-danger rounded fw-bold'>Delete product</button>
               </div>)
           }
           <Link to='/addproduct' style={{ textDecoration: 'none' }}>
               <div className='container   text-center mt-2 py-2 mb-5'>
               <button className='btn btn-success text-decoration-none d-block w-50 mx-auto fw-bold'>Add new products</button>
               </div>
                   </Link> 


        </div>
    );
};

export default ManageProducts;