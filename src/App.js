import React, { Component, useEffect } from "react";
import "./App.css";
import AuthandSignup from "./Components/AuthandSignup/AuthandSignup";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import ProtectRoutes from "./ProtectRoutes";
import { autoLogin } from "./api/auth/auth";
import Account from "./Components/Account";

function App() {
  useEffect(() => {
    const login = async () => {
      const res = await autoLogin();
      if (res.status === 200) {
        dispatch({
          type: "LOGIN",
          payload: res.json(),
          usertype: loginData.usertype,
        });
        navigator("/");
      }
    };
    login();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/auth" element={<AuthandSignup />} />
          <Route element={<ProtectRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:shopId" element={<Shop />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
