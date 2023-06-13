import React from "react";
import "../../css/cart.css";
import Item from "../modals/CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector(store => store.cart.cart)
  return (
    <div id="cart">
      <div className="cart-ctn ctn">
        <div className="title">My Cart</div>
        <div className="items">
          {cart.map((item, index) => {
            return <Item itemDetails={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
