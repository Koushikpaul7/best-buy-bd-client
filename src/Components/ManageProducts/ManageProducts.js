import React from 'react';
import UseProducts from '../../Hooks/UseProducts';

const ManageProducts = () => {
    const[products,setProducts]=UseProducts();

    const handleDelete=id=>{
        const proceed= window.confirm('are you sure to remove the product');
        if(proceed){
            const url=`http://localhost:5000/product/${id}`;
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
        </div>
    );
};

export default ManageProducts;