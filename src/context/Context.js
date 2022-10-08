import React from 'react';
import { createContext, useReducer, useContext } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';

const CartContext = createContext();

faker.seed(100);

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

  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
  });

  console.log(productState);

  // We share the state and the dispatch
  return <CartContext.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</CartContext.Provider>;
};

export default Context;

// We export the State
export const CartState = () => {
  return useContext(CartContext);
};
