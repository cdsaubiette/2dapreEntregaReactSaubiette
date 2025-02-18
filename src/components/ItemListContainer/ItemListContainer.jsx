import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from '../ItemList/itemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]); // Estado para los productos
    const { categoryId } = useParams(); 

    useEffect(() => {
        
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        
        asyncFunc(categoryId)
            .then((response) => { 
                setProducts(response); 
            })  
            .catch((error) => {
                console.log(error); 
            });

    }, [categoryId]); 

    return (
        <div className="ItemListContainer">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;