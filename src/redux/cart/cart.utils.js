export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const doesItemExits = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (!doesItemExits) {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }

  // if it does exits...
  const groupedCartItemData = cartItems.map((cartItem) =>
    cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

  return groupedCartItemData;
};
