import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; 
import CartItemCount from '../CartItemCount/CartItemCount';

const CartItem = ({ id, nombre, img, precio, categoria, quantity, stock }) => {
    const { removeItem, updateQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const handleQuantityChange = (newQuantity) => {
        updateQuantity(id, newQuantity);
    }

    const handleImageClick = () => {
        navigate(`/item/${id}`);
    }


    return (
        <div className='CartItem'>
            <div>
                <picture 
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer' }}
                    className="cart-item-picture"
                >
                    <img src={img} alt={nombre} className="ItemImgCart" />
                    <h4>{nombre}</h4>
                </picture>
                <p>Precio: ${precio}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${precio * quantity}</p>
                <CartItemCount 
                    initial={quantity} 
                    stock={stock} 
                    onQuantityChange={handleQuantityChange}
                />
                <button onClick={() => removeItem(id)} className="Eliminar"> Quitar </button>
            </div>
        </div>
    )
}

export default CartItem;