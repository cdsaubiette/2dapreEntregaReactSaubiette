import CartWidget from '../CartWidget/CartWidget';
import EcommerceStore from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <img src={EcommerceStore} alt="Logo Ecommerce" className="logo" />
            </Link>
            
            <div>
                <Link to={`/category/Lenguaje`}>
                    <button>Lenguaje</button>
                </Link>
                <Link to={`/category/Framework`}>
                    <button>Framework</button>
                </Link>
                <Link to={`/category/Librería`}>
                    <button>Librería</button>
                </Link>
                <Link to={`/category/Herramienta`}>
                    <button>Herramienta</button>
                </Link>
                <Link to={`/Nosotros`}>
                    <button>Nosotros</button>
                </Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
