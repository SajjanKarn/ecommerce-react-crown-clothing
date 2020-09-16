import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

import { toggleHiddenCart } from "../../redux/cart/cart.actions";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleHiddenCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleHiddenCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
