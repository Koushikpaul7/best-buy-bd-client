import React from 'react';

const Review = ({review}) => {
    const{name,picture,email,comment}=review
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card" style={{ width: "18rem" }}>
            <img style={{height:'200px'}} src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}.</p>
                <p className="card-text">{comment}.</p>
                
            </div>
        </div>
    </div>
    );
};

export default Review;