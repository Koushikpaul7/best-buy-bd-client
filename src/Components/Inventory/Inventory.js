import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import Product from './Product/Product';

const Inventory = () => {
    const[products,setProducts]=UseProducts();
    return (
        <div>
            <div className='container'>
                <h2 className='text-center text-warning'>Welcome to inventory</h2>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                    {
                        products.map(product=><Product key={product._id} product={product}></Product>)
                    }
                    </div>

                </div>
            </div>
    );
};

export default Inventory;