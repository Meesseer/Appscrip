import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Hero from './Components/Hero/Hero';
import Margin from './Components/Margin/Margin'
import NavBar from './Components/NavBar/NavBar';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer/Footer';
import Connect from './Components/Footer/Connect/Connect';
import ProductToolBar from './Components/ProductToolbar/ProductToolBar';

function App() {
  const [products, setProducts] = useState({})
  const [filterFlag, setFilterFlag] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  console.log(products)
  return (
    <div>
      <Margin/>
      <NavBar/>
      <Hero/>
      <ProductToolBar products={products} filterFlag={filterFlag} setFilterFlag={setFilterFlag} />
      <Products products={products} filterFlag={filterFlag} setFilterFlag={setFilterFlag}/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
