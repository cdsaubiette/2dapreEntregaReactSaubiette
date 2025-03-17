import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ItemList from '../ItemList/itemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../AddFirebase/config';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]); 
    const { categoryId } = useParams(); 

    useEffect(() => {  
        const productosRef = collection(db, "products");
        const q = categoryId 
            ? query(productosRef, where("categoria", "==", categoryId))
            : productosRef;
            
        getDocs(q)  
            .then((resp) => {  
                setProducts(  
                    resp.docs.map((doc) => {  
                        return { ...doc.data(), id: doc.id }  
                    })  
                )  
            });  
    }, [categoryId]); 

    return (
        <div className="ItemListContainer">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;