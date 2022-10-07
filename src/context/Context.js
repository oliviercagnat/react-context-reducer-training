import React from 'react';
import { createContext, useReducer, useContext } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';

const ShoppingCartContext = createContext();

// faker.seed(100);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const initialState = {
    products: products,
    cart: [],
  };

  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // We share the state and the dispatch
  return <ShoppingCartContext.Provider value={{ state, dispatch }}>{children}</ShoppingCartContext.Provider>;
};

export default Context;

// We export the State
export const ShoppingCartState = () => {
  return useContext(ShoppingCartContext);
};
