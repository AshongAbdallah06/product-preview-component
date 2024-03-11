import './App.css';
import mobileHeaderImage from './images/image-product-mobile.jpg';
import desktopHeaderImage from './images/image-product-desktop.jpg';
import cartIcon from './images/icon-cart.svg';

function App() {
    const width = window.innerWidth;
    return (
        <div className="App">
            <header>
                <img className='header-img' src={width > 650 ? desktopHeaderImage : mobileHeaderImage} alt="" />
            </header>

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

            {/* <footer className="attribution" style={{textAlign: 'center', marginTop: '50px'}}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://www.frontendmentor.io/profile/AshongAbdallah06">Ashong Abdallah</a>.
            </footer> */}

        </div>
    );
}

export default App;
