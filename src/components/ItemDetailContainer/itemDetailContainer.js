import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/itemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../AddFirebase/config';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemid } = useParams(); 

    useEffect(() => {
        const docRef = doc(db, 'products', itemid);
        
        getDoc(docRef)
            .then(response => {
                setProduct({...response.data(), id: response.id});
            })
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
