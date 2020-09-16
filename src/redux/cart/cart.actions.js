import cartActionsTypes from "./cart.types";

export const toggleHiddenCart = () => ({
  type: cartActionsTypes.TOGGLE_HIDDEN_VALUE,
});

export const addItem = (item) => ({
  type: cartActionsTypes.ADD_ITEM,
  payload: item,
});
