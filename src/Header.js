import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';


function Header() {
    const [{ basket,user }] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
    return <nav className="header">   
            {/*logo on the left */}
            <Link to="/">
                <img className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                ></img>
            </Link>
            {/*Search box */}
            <div className="header__search">
                <input type='text' className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            {/*3 Links */}
            {/*Basket*/}
            <div className="header__nav">
                {/*first link */}
                <Link to={!user && "/login"}className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello, {user?.email}</span>

                        <span className="header__optionLineTwo">{user? 'Sign out': 'Sign In'}</span>
                    </div>
                </Link>
                {/*second link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/*third link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/*fourth link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/*Shopping Basket Icon */}
                        <ShoppingBasketIcon/>
                        {/*Number of items in the Basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
        
}

export default Header
