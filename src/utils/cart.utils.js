export const addItemToCart = (cart, itemToAdd) => {
  const existingCartItem = cart.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    return cart.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  localStorage.setItem(
    "inCart",
    JSON.stringify([...cart, { ...itemToAdd, quantity: 1 }])
  );
  return [...cart, { ...itemToAdd, quantity: 1 }];
};

export const decreaseItem = (cart, itemToRemove) => {
  const existingCartItem = cart.find((item) => item.id === itemToRemove.id);
  if (existingCartItem.quantity === 1) {
    return cart.filter((item) => item.id !== itemToRemove.id);
  }
  return cart.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

// export const filterItemFromCart = (cartItems, item) =>
//   cartItems.filter(cartItem => cartItem.id !== item.id);

export const getCartLength = (cart) =>
  cart.reduce((allQty, item) => allQty + item.quantity, 0);

export const getAmountToPay = (cart) => {
  let total;
  cart.reduce(
    (allQty, item) => (total = allQty + item.quantity * item.price),
    0
  );
  // console.log(total);
  localStorage.setItem("total", total);
};
