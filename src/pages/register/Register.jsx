import "./register.scss";
import React, { useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (cpassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords doesn't match !!!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>VVIT CONNECT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleClick}>
            <div className="input-group">
              <input
                type="text"
                name="text"
                class="input"
                required
                ref={username}
              />
              <label class="user-label">Username</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                name="text"
                class="input"
                required
                ref={email}
              />
              <label class="user-label">Mail</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                name="text"
                class="input"
                required
                ref={password}
              />
              <label class="user-label">Password</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                name="text"
                class="input"
                required
                ref={cpassword}
              />
              <label class="user-label">Confirm Password</label>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
