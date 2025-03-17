import { useContext } from 'react' 
import { CartContext } from '../../context/CartContext'  
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget">
            <img src='https://i.ibb.co/0j2KMNNk/cart.webp' alt="cart-widget" className="CartImg"/>
            <span className="CartQuantity">{totalQuantity || 0}</span>
        </Link>
    )
}

export default CartWidget;