import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <>
        <header className="desktop-header">
            <div className="logo_container">
                <a>
                    <img className="header-logo" src="https://cdn.shopify.com/s/files/1/0456/6820/4706/files/Sharebox_editable-17_180x.png?v=1605634439"></img>
                </a>
            </div>
            <div className="nav_container">
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Box to Go!</a></li>
                        <li><a href="#">Make your Box</a></li>
                        <li><a href="#">Out of the Box</a></li>
                        <li><a href="#">Caring for you</a></li>
                    </ul>
                </nav>
            </div>
            <div className="icons_container">
                <nav>
                    <ul className="nav-icons">
                        <li className="icon-item">
                            <div className="icon">
                                <a>
                                    <ShoppingBasketIcon/>
                                </a>
                            </div>
                        </li>
                        <li className="icon-item">
                            <div className="icon">
                                <a>
                                    <PersonIcon/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header
