import React from "react";
import "../css/header.css";
import { AiOutlineShoppingCart, AiOutlineFieldTime } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <div className="header-ctn ctn">
        <Link to={"/"}>
          <div className="logo">OMS</div>
        </Link>
        <div className="options">
          <Link to={"/cart"}>
            <div className="mycart">
              <AiOutlineShoppingCart />
            </div>
          </Link>
          <Link to={"/orders"}>
            <div className="myorders">
              <AiOutlineFieldTime />
            </div>
          </Link>
          <Link to={"/account"}>
            <div className="account">
              <MdAccountCircle />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
