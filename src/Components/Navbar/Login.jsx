import React, { useState } from "react";

import "./Login.css";
import { Button, Link } from "react-scroll";

const Login = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <div className="body1">
      <div className="container1">
        <div className="form-container1">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setLogin(false)}
            >
              Signup
            </button>
          </div>
          {isLogin ? (
            <>
              <div className="form">
                <h2>Login Form</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Link href="#">Forget Password</Link>
                <button>Login</button>
                <p>
                  New User ?{" "}
                  <Link to="#" onClick={() => setLogin(false)}>
                    Signup Now
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="form">
                <h2>Signup Form</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder=" Confirm-Password" />
                <button>Signup</button>
                <p>
                  Already Have Account ? {""}
                  <Link to="#" onClick={() => setLogin(true)}>
                    Login
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
