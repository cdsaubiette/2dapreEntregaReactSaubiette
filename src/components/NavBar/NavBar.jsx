import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <img src="https://gcdnb.pbrd.co/images/KZ4VUilA7Ym1.webp?o=1" alt="Logo" className="logo" />
            </Link>
            
            <div>
                <Link to={`/category/Lenguaje`}>
                    <button>LENGUAJE</button>
                </Link>
                <Link to={`/category/Framework`}>
                    <button>FRAMEWORK</button>
                </Link>
                <Link to={`/category/Librería`}>
                    <button>LIBRERIA</button>
                </Link>
                <Link to={`/category/Herramienta`}>
                    <button>HERRAMIENTA</button>
                </Link>
                <Link to={`/contacto`}>
                    <button>CONTACTO</button>
                </Link>
                <Link to={`/Nosotros`}>
                    <button>NOSOTROS</button>
                </Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
