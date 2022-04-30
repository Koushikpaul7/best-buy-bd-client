import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center mt-4 '>Add new product for Best Buy Bd</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2  rounded shadow' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input  className='mb-2 rounded shadow'placeholder='photo url' type='text' {...register("picture", { required: true, maxLength: 20 })} />
                <input  className='mb-2 rounded shadow'placeholder='price'{...register("price", { required: true, maxLength: 20 })} />
                <input  className='mb-2 rounded shadow'placeholder='quantity' type='number' {...register("quantity", { required: true, maxLength: 20 })} />
                <input  className='mb-2 rounded shadow'placeholder='company'{...register("company")} />
                <input className='btn btn-warning fw-bold' type="submit"  v rounded shadowalue='Add Product' />
            </form>
        </div>
    );
};

export default AddProducts;