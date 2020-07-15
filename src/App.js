import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import { createBrowserHistory } from "history";
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import ProductItem from './Component/ProductItem';

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}> 
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="product/:id" element={<ProductItem/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
