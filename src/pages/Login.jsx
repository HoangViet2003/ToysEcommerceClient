import React from 'react'
import "../assets/css/main.css";
import "../assets/css/util.css";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

function Login() {
      const [inputs, setInputs] = useState({
        email: "",
        password: "",
      });

      console.log(inputs);

      const { handleLogin, isLoading } = useAuth();

      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // await login(inputs);
          handleLogin(inputs);

          // navigate("/");
        } catch (err) {
          console.log(err);
        }
      };


  return (
    <div className="limiter">
      {isLoading && <Loading />}
      <div
        className="container-login100"
        style={{
          backgroundImage:
            "url('https://image.lexica.art/full_jpg/5df888a3-5e71-4680-95fd-a227387edd4d')",
        }}
      >
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-49">Login</span>

            <div
              className="wrap-input100 validate-input m-b-23"
              data-validate="Username is required"
            >
              <span className="label-input100">Username</span>
              <input
                className="input100"
                type="email"
                name="email"
                placeholder="Type your email"
                required
                onChange={handleChange}
              />
              <span className="focus-input100">
                <i
                  className="uil uil-envelope"
                  style={{ position: "absolute", top: "40px" }}
                ></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <span className="label-input100">Password</span>
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Type your password"
                onChange={handleChange}
                required
              />
              <span className="focus-input100">
                <i
                  className="uil uil-lock"
                  style={{ position: "absolute", top: "40px" }}
                ></i>
              </span>
            </div>

            <div className="text-right p-t-8 p-b-31">
              <a href="#">Forgot password?</a>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </div>

            <div className="txt1 text-center p-t-54 p-b-20">
              <span>Or Sign Up Using</span>
            </div>

            <div className="flex-c-m">
              <a href="#" className="login100-social-item bg1">
                <i className="fa fa-facebook"></i>
              </a>

              <a href="#" className="login100-social-item bg2">
                <i className="fa fa-twitter"></i>
              </a>

              <a href="#" className="login100-social-item bg3">
                <i className="fa fa-google"></i>
              </a>
            </div>

            <div className="flex-col-c p-t-155">
              <span className="txt1 p-b-17">Or Sign Up Using</span>
              <Link to="/register" className="txt2">
                <a className="txt2">Sign Up</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
