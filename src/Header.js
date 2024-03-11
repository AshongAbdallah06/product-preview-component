import React from 'react';
import mobileHeaderImage from './images/image-product-mobile.jpg';
import desktopHeaderImage from './images/image-product-desktop.jpg';

const Header = () => {
    const width = window.innerWidth;

    return (
        <picture>
            <source srcset={desktopHeaderImage} />
            <img className='header-img' src={mobileHeaderImage} alt="" />
        </picture>    
    )
}

export default Header