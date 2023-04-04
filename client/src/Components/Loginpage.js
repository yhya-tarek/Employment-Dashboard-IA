// import "../style/Login.css";
import { Header } from "./shared/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Loginpage = () => {
  const navigate = useNavigate();
  const win = window.sessionStorage;
  if (win.getItem("auth")) {
    navigate("/");
  }
  const [loginForm, setLoginForm] = useState({
    Email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const checkValidation = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/login", {
          Email: loginForm.Email,
          password: loginForm.password,
        })
        .then((response) => {
          if (response.data.authorized) {
            win.setItem("name", response.data.user.name);
            win.setItem("auth", response.data.user.authorized);
            navigate("/");
          } else {
          }
        })
        .catch((error) => {
          setError(error.response.data.msg);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header></Header>
      <div class="center">
        <h1>Login</h1>
        <form onSubmit={checkValidation}>
          <div class="txt_field">
            <input
              id="email"
              type="email"
              required
              value={loginForm.Email}
              onChange={(e) => {
                setLoginForm({ ...loginForm, Email: e.target.value });
              }}
            />
            <span></span>
            <label htmlFor="email">Email</label>
          </div>
          <div class="txt_field">
            <input
              id="password"
              type="password"
              required
              value={loginForm.password}
              onChange={(e) => {
                setLoginForm({ ...loginForm, password: e.target.value });
              }}
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </div>
          {error ? (
            <div
              style={{
                color: "red",
                paddingBottom: "15px",
                paddingLeft: "5px",
              }}
            >
              {error}
            </div>
          ) : null}
          <div class="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </>
  );
};
