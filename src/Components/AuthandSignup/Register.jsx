import React, { useState } from "react";

function Register() {
  const [registerData, setRegisterData] = useState({});

  const handleChange = (e) => {
    const [name, value] = e.target;

    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("register");
  };
  return (
    <div id="register">
      <div className="title">Regsiter</div>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="emai"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={registerData.email}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={registerData.password}
        />
        <select
          name="usertype"
          id="usertype"
          className="usertype"
          value={registerData.usertype}
          onChange={handleChange}
        >
          <option value="customer">Customer</option>
          <option value="shopkeeper">Shopkeeper</option>
        </select>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
