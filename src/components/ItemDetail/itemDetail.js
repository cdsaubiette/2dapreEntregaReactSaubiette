import '../../App.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import ItemCount from '../itemCount/itemCount';

const ItemDetail = ({ id, nombre, img, precio, categoria, descripcion, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext);

        const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    
        const item = {
        id, nombre, precio, img, categoria, quantity, stock
        }

        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Nombre: {nombre}</p>
                <p className="Info">Precio: ${precio}</p>
                <p className="Info">Descripcion: {descripcion}</p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'> IR AL CARRITO </Link>
                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    );
}

export default ItemDetail;