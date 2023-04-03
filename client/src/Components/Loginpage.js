// import "../style/Login.css";
import { Header } from "./shared/Header";
import axios from "axios";
import { useState, useEffect } from "react";

export const Loginpage = () => {
  const [loginForm, setLoginForm] = useState({
    Email: "",
    password: "",
  });
  const checkValidation = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get("http://localhost:5000/login", {
        Email: loginForm.Email,
        password: loginForm.password,
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
