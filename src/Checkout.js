import React from 'react'
import { useStateValue } from "./StateProvider"
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
 


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__add" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CBCC/marketing/marketingpage/prime-mp.png" 
            alt =""/>
        {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Cart is Empty </h2>
                <p>
                    You have no items in your cart. To buy one, click "Add to Basket" next to the item.
                </p>
            </div>
            ) : (
            <div>
                <h2 className = "checkout__title">Your Shopping Cart</h2>
                
                {/*list out all of the Checkout Products */}
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />

                )) }

            </div>
            )}
            </div>
            {basket.length > 0 &&(
                <div className="checkout__right">
                    <SubTotal>

                    </SubTotal>

                
                </div>
                )}
        </div>
    )
}

export default Checkout;
