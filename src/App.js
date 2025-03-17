import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/itemCount';
import Nosotros from './components/nosotros/nosotros'; 
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Cart from './components/cart/Cart';
import Contacto from './components/Contacto/contacto';
import CheckOut from './components/CheckOut/CheckOut.js';


function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemid' element={<ItemDetailContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            <Route path='/cart' element={ <Cart />} />
            <Route path='/checkout' element={ <CheckOut /> } />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
