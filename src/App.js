import React, { Component } from "react";
import "./App.css";
import AuthandSignup from "./Components/AuthandSignup/AuthandSignup";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/auth" element={<AuthandSignup />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:index" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
