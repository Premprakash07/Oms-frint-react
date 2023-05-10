import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../../css/authandSignup.css";

function AuthandSignup() {
  const [signin, setSignin] = useState(false);

  return (
    <div id="authandsignup">
      <div className="auth">
        {signin ? <Login /> : <Register />}
        <div
          className="changeauth"
          onClick={() => {
            setSignin((prev) => !prev);
          }}
        >
          {signin ? "New here? Register now." : "Already have an account?"}
        </div>
      </div>
      <div className="about">
        <div className="title">Order Management System</div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, a
          illo laudantium ea repudiandae rem! Alias dolorum quisquam
          perspiciatis corporis, voluptates, saepe atque reprehenderit repellat
          labore explicabo repellendus velit aperiam.
        </div>
      </div>
    </div>
  );
}

export default AuthandSignup;
