import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
    return (
        <>
        <header>
            <img className="header-logo" src="https://cdn.shopify.com/s/files/1/0456/6820/4706/files/Sharebox_editable-17_180x.png?v=1605634439"></img>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Box to Go!</a></li>
                    <li><a href="#">Make your Box</a></li>
                    <li><a href="#">Out of the Box</a></li>
                    <li><a href="#">Caring for you</a></li>
                </ul>
            </nav>
            <nav>
                <ul className="nav-icons">
                    <li>
                        <ShoppingBasketIcon/>
                    </li>
                    <li>
                        <PersonIcon/>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
