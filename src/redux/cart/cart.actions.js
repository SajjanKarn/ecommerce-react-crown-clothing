import cartActionsTypes from "./cart.types";

export const toggleHiddenCart = () => ({
  type: cartActionsTypes.TOGGLE_HIDDEN_VALUE,
});

export const addItem = (item) => ({
  type: cartActionsTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionsTypes.CLEART_ITEM_FROM_CART,
  payload: item,
});

export const deleteItemFromCart = item => ({
  type: cartActionsTypes.DELETE_ITEM,
  payload: item
})
