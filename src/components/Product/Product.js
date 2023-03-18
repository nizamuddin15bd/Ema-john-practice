import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacture: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='product-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;