import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../../css/authandSignup.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthandSignup() {
  const [signin, setSignin] = useState(true);
  const [error, setError] = useState(false);
  const navigator = useNavigate();
  const authenticated = useSelector((store) => store.authenticated);

  useEffect(() => {
    if (authenticated) {
      navigator("/");
    }
  }, []);

  return (
    <div id="authandsignup">
      <div className="auth">
        <div className="title">{signin ? "Login" : "Register"}</div>
        {error && <div className="error">{error}</div>}
        {signin ? (
          <Login setError={setError} />
        ) : (
          <Register setError={setError} />
        )}
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
