import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url=`http://localhost:5000/product`;
        fetch(url,{
            method:'POST',
            headers: {
               'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center mt-4 '>Add new product for Best Buy Bd</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' className='mb-2 rounded' {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder='price' className='mb-2 rounded' {...register("price", { required: true, maxLength: 20 })} />
      <input placeholder='photo url' className='mb-2 rounded' {...register("picture", { required: true, maxLength: 1000 })} />
      <input placeholder='company' className='mb-2 rounded' {...register("company", { required: true, maxLength: 20 })} />
      <input placeholder='description' className='mb-2 rounded' {...register("description")} />
      <input placeholder='quantity' className='mb-2 rounded' type="number" {...register("quantity")} />
      <input type="submit" value='Add product' />
    </form>
        </div>
    );
};

export default AddProducts;