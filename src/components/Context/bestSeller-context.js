import React, { useReducer } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, ADD_BEST_PRODUCT } from "./reducers";
import relatedProducts from "../data/relatedProducts.json";
import bestProducts from "../data/bestSeller.json";

const GlobalState = (props) => {
  const products = relatedProducts;
  const bestSellers = bestProducts;
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 500);
  };

  const addBestProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_BEST_PRODUCT, product: product });
    }, 500);
  }

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        bestSellers: bestSellers,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        addBestProductToCart: addBestProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
