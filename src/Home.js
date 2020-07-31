import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmZkNTUwNjEt/ZmZkNTUwNjEt-MjM1NGM5Yjct-w1500._CB429455190_.jpg"
                alt="homepage_image">
            </img>
            {/* Product Id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id={12341} 
                    title="How Innovation Works: And Why It Flourishes in Freedom"
                    price={20.42}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41+9XUzKxaL._SX327_BO1,204,203,200_.jpg"
                />
                {/* Product Id, title, price, rating, image */}
                <Product 
                    id={12345} 
                    title="Bose Wireless HeadPhones: Bluetooth"
                    price={259.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51sAtKgDkDL._AC_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id={12342} 
                    title="Kindle Paper White"
                    price={129.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61T7vSMjrAL._AC_SL1000_.jpg"
                />
                {/* Product Id, title, price, rating, image */}
                <Product 
                    id={12340} 
                    title="Snow Crash by Neal Stephenson"
                    price={9.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51nbYwWXNuL._SX332_BO1,204,203,200_.jpg"
                />
                 <Product 
                    id={12346} 
                    title="All-new Ring Video Doorbell - 1080p HD vide, improved motion detection"
                    price={99.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71mlE7vPglL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id={12347} 
                    title="Amazon Smart Oven"
                    price={249.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61eg-UvUCIL._AC_SL1000_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
