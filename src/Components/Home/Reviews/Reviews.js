import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[]);
    return (
        <div className='container mt-4'>
            <h2 className='text-center text-warning'>Customer Reviews</h2>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        reviews.map(review=><Review key={review._id} review={review}></Review>)
                    }
                    </div>
        </div>
    );
};

export default Reviews;