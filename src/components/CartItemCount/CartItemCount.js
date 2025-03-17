import { useState } from 'react';

const CartItemCount = ({ initial, stock, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    }
    
    return(
        <div className='Controls'>
            <button className='buttoncart' onClick={decrement}>-</button>
            <h4 className='Number'>{quantity}</h4>
            <button className='buttoncart' onClick={increment}>+</button>
        </div>
    )
}

export default CartItemCount;