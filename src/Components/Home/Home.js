import React from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts';
import Footer from '../Footer/Footer';
import Product from '../Inventory/Product/Product';
import Banner from './Banner/Banner';

const Home = () => {
    const[products,setProducts]=UseProducts();
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
                <Link to='/inventory'>
                    <div className='container   text-center mt-5'>
                    <button className='btn btn-warning mb-3 fw-bold w-50 rounded py-3'>Go to inventory</button>
                    </div>
                    </Link>
              
        </div>
    );
};

export default Home;