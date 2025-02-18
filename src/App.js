import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/itemCount';
import Nosotros from './components/nosotros/nosotros'; 
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemid' element={<ItemDetailContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
