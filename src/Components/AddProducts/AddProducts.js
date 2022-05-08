
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddProducts = () => {
    const [user]=useAuthState(auth)


    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        console.log(data);

        const url=`  https://shielded-bayou-98434.herokuapp.com/product`;
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
            toast('Successfully Added',data.name)
            event.target.reset()
        })

    }
    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center mt-4 '>Add new product for Best Buy Bd</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

      <input placeholder='Name' className='mb-2 rounded' {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder='Name' className='mb-2 rounded' value={user.email} {...register("email", { required: true, maxLength: 200 })} />
      <input placeholder='price' className='mb-2 rounded' {...register("price", { required: true, maxLength: 20 })} />
      <input placeholder='photo url' className='mb-2 rounded' {...register("picture", { required: true, maxLength: 1000 })} />
      <input placeholder='company' className='mb-2 rounded' {...register("company", { required: true, maxLength: 20 })} />
      <input placeholder='description' className='mb-2 rounded' {...register("description")} />
      <input placeholder='quantity' className='mb-2 rounded' type="number" {...register("quantity")} />
      <input className='btn btn-success rounded shadow' type="submit" value='Add product' />
    </form>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProducts;