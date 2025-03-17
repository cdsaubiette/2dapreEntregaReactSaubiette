import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Item = ({ id, nombre, img, precio, categoria }) => {
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
                <p className="Info">Precio:${precio}</p>
                <p className="Info">Categoría:{categoria}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">VER DETALLE</Link>
            </footer>
        </article>
    );
}

export default Item;