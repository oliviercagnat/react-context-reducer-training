import React from 'react';
import { ShoppingCartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import './styles.css';

const Home = () => {
  const {
    state: { products },
  } = ShoppingCartState();

  console.log(products);
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
