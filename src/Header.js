import React from 'react';
import mobileHeaderImage from './images/image-product-mobile.jpg';
import desktopHeaderImage from './images/image-product-desktop.jpg';

const Header = () => {
    const width = window.innerWidth;

    return (
        <header>
            <img className='header-img' src={width > 650 ? desktopHeaderImage : mobileHeaderImage} alt="" />
        </header>    
    )
}

export default Header