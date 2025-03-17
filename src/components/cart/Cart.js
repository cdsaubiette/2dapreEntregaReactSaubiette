import { useContext } from "react" 
import { CartContext } from '../../context/CartContext'  
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom' 

const Cart = () => {  
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {  
        return(  
            <div>  
                <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
                <Link to='/' className='OptionCart'>AGREGAR PRODUCTOS</Link>  
            </div>  
        )  
    } 

    return (  
        <div className='cart-container'>
            <div className='cart-items-section'>  
                { cart.map(p => <CartItem key={p.id} {...p}/>) }  
                <button onClick={() => clearCart()} className="cleanCart">VACIAR CARRITO</button>  
            </div>
            <div className='cart-summary'>
                <h2>Resumen de compra</h2>
                <div className='summary-items'>
                    {cart.map(item => (
                        <div key={item.id} className='summary-item'>
                            <span className='summary-item-name'>{item.nombre}</span>
                            <span>${item.precio * item.quantity}</span>
                        </div>
                    ))}
                </div>
                <div className='summary-total'>
                    <h3>Total: ${total}</h3>
                    <Link to='/checkout' className='buyFinish'>FINALIZAR COMPRA</Link>
                </div>
            </div>
        </div>  
    )  
}

export default Cart;
