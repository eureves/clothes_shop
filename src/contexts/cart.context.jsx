import { createContext, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
});

const ININTIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error("Unhandled type of ${type} in cartReducer");
  }
};

const addCartItem = (cartItems, product) => {
  const isInCart = cartItems.find((item) => item.id === product.id);

  if (isInCart) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  const isInCart = cartItems.find((item) => item.id === product.id);

  if (isInCart.quantity === 1) {
    return clearCartItem(cartItems, product);
  }

  return cartItems.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearCartItem = (cartItems, product) => cartItems.filter((item) => item.id !== product.id);

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] = useReducer(
    cartReducer,
    ININTIAL_STATE
  );

  const updateCartItems = (cartItems) => {
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    dispatch({ type: "SET_CART_ITEMS", payload: { cartCount, cartTotal, cartItems } });
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: "SET_CART_OPEN", payload: { isCartOpen: bool } });
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (product) => {
    const newCartItems = removeCartItem(cartItems, product);
    updateCartItems(newCartItems);
  };

  const clearItemFromCart = (product) => {
    const newCartItems = clearCartItem(cartItems, product);
    updateCartItems(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
