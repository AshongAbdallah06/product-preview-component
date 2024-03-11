import React from 'react';
import mobileHeaderImage from './images/image-product-mobile.jpg';
import desktopHeaderImage from './images/image-product-desktop.jpg';

const Header = () => {
    return (
        <picture>
            <source srcset={desktopHeaderImage} media="(min-width: 650px)" />
            <img className='header-img' src={mobileHeaderImage} alt="MDN" />
        </picture>
    )
}

export default Header