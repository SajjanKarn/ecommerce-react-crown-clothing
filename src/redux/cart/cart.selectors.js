import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHiddenCart = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedValue, cartItems) =>
        (accumulatedValue = accumulatedValue + cartItems.quantity),
      0
    )
);

export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedValue, cartItems) =>
        (accumulatedValue =
          accumulatedValue + cartItems.quantity * cartItems.price),
      0
    )
);
