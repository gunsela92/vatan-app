import React from "react";

export default React.createContext({
  products: [],
  bestSellers: [],
  cart: [],
  addBestProductToCart: (product) => {},
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
