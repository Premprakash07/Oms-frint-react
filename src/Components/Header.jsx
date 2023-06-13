import React from "react";
import "../css/header.css";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as userLogout } from "../api/auth/auth";

function Header() {
  const authenticated = useSelector((store) => store.user.authenticated);
  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  const logout = async () => {
    const res = await userLogout();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div id="header">
      <div className="header-ctn ctn">
        <NavLink to={"/"} className="logo">
          <div className="logo">OMS</div>
        </NavLink>
        {authenticated && (
          <div className="options">
            <NavLink to={"/"} className="home">
              <AiOutlineHome />
            </NavLink>
            <NavLink to={"/cart"} className="mycart">
              <AiOutlineShoppingCart />
              {cart.length !== 0 && <div className="cartQ">{cart.length}</div>}
            </NavLink>
            <NavLink to={"/orders"} className="myorders">
              <AiOutlineFieldTime />
            </NavLink>
            <NavLink to={"/account"} className="account">
              <MdAccountCircle />
            </NavLink>
            {authenticated && (
              <NavLink onClick={logout} className="logout-btn btn">
                Logout
              </NavLink>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
