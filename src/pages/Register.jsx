import React from "react";
import "../assets/css/main.css";
import "../assets/css/util.css";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

function Register() {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });


  const { handleLogin, isLoading, handleRegister } = useAuth();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await login(inputs);
      handleRegister(inputs);

      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="limiter">
      <div
        className="container-login100"
        style={{
          backgroundImage:
            "url('https://image.lexica.art/full_jpg/4d70a4f5-317f-4518-b693-66117eb2d934')",
        }}
      >
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-49">Register</span>

            <div
              className="wrap-input100 validate-input m-b-23"
              data-validate="Username is required"
            >
              <span className="label-input100">Username</span>
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Type your username"
                required
                onChange={handleChange}
              />
              <span className="focus-input100">
                <i
                  className="uil uil-user-circle"
                  style={{ position: "absolute", top: "40px" }}
                ></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-23"
              data-validate="Username is required"
            >
              <span className="label-input100">Email</span>
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

            <div className="text-right p-t-8 p-b-31"></div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" onClick={handleSubmit}>
                  Sign up
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
              <span className="txt1 p-b-17">You have account ? </span>
              <Link to="/login" className="txt2">
                <a href="#" className="txt2">
                  Login
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
