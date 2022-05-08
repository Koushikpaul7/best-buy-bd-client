import React from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts';
import Product from '../Inventory/Product/Product';
import Banner from './Banner/Banner';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Reviews from './Reviews/Reviews';
import Loading from '../Login/Loading/Loading';

const Home = () => {
    const[user]=useAuthState(auth);
    const[products,setProducts]=UseProducts();

    if(products.length===0){
        return <Loading></Loading>
    }
    return (
        <div>
           <Banner></Banner>
           <div className='container mt-4'>
                <h2 className='text-center text-warning'>Our products</h2>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        products.slice(0,6).map(product=><Product key={product._id} product={product}></Product>)
                    }
                    
                    </div>
                </div>
                <div>
                    <Reviews></Reviews>
                    <div className='row'>
                        <h3 className='text-center mt-5 text-danger container shadow'>Hot Deals</h3>
                       <div className='col-md-6'>
                       <img className='mx-auto d-block ps-4' src="https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-discount-20--off-vector-template-design-illustration-png-image_693405.jpg" alt="" />
                       </div>
                       <div className='col-md-6 pt-5 pe-5 container '>
                           <h3 className=' d-block pe-5  text-center text-success pt-5 me-5'>Special discount will be provided on Ordering 20+ products. This a limited time offer. Grab the offer.</h3>
                       </div>
                    </div>
                </div>
                <Link to='/inventory'>
                    <div className='container   text-center mt-5'>
                    <button className='btn btn-warning mb-3 fw-bold w-50 rounded py-3'>Go to inventory</button>
                    </div>
                    </Link>
                    {
                user&&<>
               <Link to='/manage'>
               <div className='container   text-center mt-2 py-2 mb-5'>
               <button style={{textDecoration:'none'}} className='btn btn-warning  d-block w-50 mx-auto fw-bold '>Manage Products</button>
               </div>
                   </Link> 
                   
                </>
            } 
           
              
        </div>
    );
};

export default Home;