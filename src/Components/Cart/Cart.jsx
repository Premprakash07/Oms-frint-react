import React from "react";
import "../../css/cart.css";
import CartItem from "./CartItem";

function Cart() {
  const itemList = [1, 2, 3, 4, 5];
  return (
    <div id="cart">
      <div className="cart-ctn ctn">
        <div className="title">My Cart</div>
        <div className="items">
          {itemList.map((item, index) => {
            return <CartItem itemDetails={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
