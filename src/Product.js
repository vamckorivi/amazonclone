import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider"

function Product({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () =>{
        //Add items to basket
        dispatch({
            type: 'ADD_TO_BASKET', 
            item: {
                id:id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => {
                       return <p>*</p>
                    })
                }
            </div>
            <img src={image} alt="productImage_alt" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
