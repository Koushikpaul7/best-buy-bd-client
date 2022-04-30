import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const{_id,name,picture,description,price,quantity,company}=product;
    const navigate=useNavigate();
    const navigateToProductEdit=id=>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div>
  <div className="card">
    <img style={{height:'300px'}} src={picture} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Product details: {description}</p>
      <p className="card-text">Price: {price}</p>
      <p className="card-text">Quantity: {quantity}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted mb-3">Dealer: {company}</small>
    </div>
    <div className='my-2'>
            <button onClick={()=>navigateToProductEdit(_id)} className='btn btn-success '>Update</button>
           
        </div>
    </div>
    </div>
    );
};

export default Product;