import ItemCount from "../itemCount/itemCount";
import '../../App.css';

const ItemDetail = ({ id, nombre, img, precio, categoria }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>
            <picture>
                <img src={`/${img}`} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Nombre: {nombre}</p>
                <p className="Info">Categoría: {categoria}</p>
                <p className="Info">Precio: ${precio}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
            </footer>
        </article>
    );
}

export default ItemDetail;