import React, { useState } from "react";
import { userLogin, logout } from "../../api/auth/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login({ setError }) {
  const [loginData, setLoginData] = useState({ usertype: "customer" });
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const res = await userLogin(loginData);
    if (res.status === 200) {
      dispatch({
        type: "LOGIN",
        payload: res.json(),
        usertype: loginData.usertype,
      });
      navigator("/");
    } else {
      setError("Bad credentials. Try again");
    }
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="userEmail"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={loginData.userEmail}
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
