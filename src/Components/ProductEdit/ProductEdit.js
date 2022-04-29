import React from 'react';
import { useParams } from 'react-router-dom';

const ProductEdit = () => {
    const {inventoryId}=useParams();
    return (
        <div className='mt-5'>
            Product Detail of {inventoryId}
        </div>
    );
};

export default ProductEdit;