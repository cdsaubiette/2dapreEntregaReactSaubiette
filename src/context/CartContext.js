import { createContext, useState } from "react" 

export const CartContext = createContext() 

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }   

    const clearCart = () => {
        setCart([])
    }
    
    const isInCart = (itemId) => {  
        return cart.some(prod => prod.id === itemId)  
    }

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity }
            }
            return item
        })
        setCart(updatedCart)
    }

    const total = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0)
    
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

    return (  
        <CartContext.Provider value={{ 
            cart, 
            addItem, 
            removeItem, 
            clearCart, 
            total,
            totalQuantity,
            updateQuantity  
        }}>  
            { children }  
        </CartContext.Provider>  
    )  
}

export default CartProvider 