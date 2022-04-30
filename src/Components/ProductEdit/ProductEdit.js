import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductEdit = () => {
   
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
        </div>
    );
};

export default ProductEdit;