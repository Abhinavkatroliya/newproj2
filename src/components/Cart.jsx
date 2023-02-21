import React from 'react';
import { useSelector } from 'react-redux';

function Cart(product) {
  return (
    <div>
       <div className='row'>
         <div className='col-md-4'>
            <img src={product.image} alt={product.title} height="200px" width="108px"/>
         </div>
         <div className='col-md-4'>
              <h3>{product.title}</h3>
              <p className='lead fw-bold'>{product.qty} X ${product.price} = ${product.qty}*{product.price}</p>
              <button className='btn btn-outline-dark m-4'></button>
              <i className='fa fa-minus'></i>
              <button className='btn btn-outline-dark m-4'></button>
              <i className='fa fa-plus'></i>
         </div>
       </div>
    </div>
  )
}

export default Cart
