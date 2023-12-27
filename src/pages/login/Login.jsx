import { useRef, useContext } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  if (user) {
    console.log(user);
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>VVIT CONNECT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
            <Link to="/register">
            <button>
              {" "}
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Register"
              )}
            </button>
              </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleClick}>
            <div class="input-group">
              <input
                required
                type="text"
                name="text"
                autocomplete="off"
                class="input"
                ref={email}
                minLength="6"
              />
              <label class="user-label">Mail</label>
            </div>
            <div class="input-group">
              <input
                required
                type="password"
                autocomplete="off"
                class="input"
                ref={password}
              />
              <label class="user-label">Password</label>
            </div>
            <button className="loginButton" type="submit" disabled={isFetching}>
              {" "}
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
