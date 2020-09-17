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

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
  const doesItemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDelete.id
  );

  if (doesItemExists.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
  }

  const dataAfterDeletion = cartItems.map((cartItem) =>
    cartItem.id === cartItemToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return dataAfterDeletion;
};
