import React from 'react';
import cartIcon from './images/icon-cart.svg';


const Main = () => {
    return (
        <main>
            <div className="description">
                <p className='perfume'>PERFUME</p>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p className='text'>
                    A floral, solar and voluptous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.
                </p>                    
            </div>

            <div className="cart">
                <div className="price">
                    <span className="current">$1499.99</span>
                    <span className="previous">$169.99</span>
                </div>
                <button>
                    <img src={cartIcon} alt="" />
                    Add to Cart
                </button>
            </div>
        </main>    
    )
}

export default Main