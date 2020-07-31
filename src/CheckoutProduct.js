import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider"

function CheckoutProduct({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();
    const removeFromBasket = () => {

        //Remove items to basket
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            id:id
        })
    }
    return (
        <div className="checkoutProdcut">
           
            <img className="checkoutProduct__image" src ={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__title">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                    Array(rating)
                    .fill()
                    .map((_) => {
                       return <p>*</p>
                    })
                 }
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
