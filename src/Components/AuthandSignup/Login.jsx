import React, { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    const [name, value] = e.target;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div id="login">
      <div className="title">Login</div>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="emai"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={loginData.email}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={loginData.password}
        />
        <select
          name="usertype"
          id="usertype"
          className="usertype"
          value={loginData.usertype}
          onChange={handleChange}
        >
          <option value="customer">Customer</option>
          <option value="shopkeeper">Shopkeeper</option>
        </select>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
