import { useState, useEffect } from 'react';
import { getProductsById } from '../asyncMock';
import ItemDetail from '../ItemDetail/itemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemid } = useParams(); 

    useEffect(() => {
        getProductsById(itemid)
            .then(response => {
                console.log('Producto encontrado:', response);
                setProduct(response);
            })
            .catch(error => {
                console.error('Error al obtener el producto:', error);
            });
    }, [itemid]);

    if (!product) {
        return <div>Cargando el producto...</div>;
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;
