import React from 'react'
import "../assets/css/errorPage.css"
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div id="notfound">
      <div class="notfound-bg">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="notfound">
        <div class="notfound-404">
          <h1>401</h1>
        </div>
        <h2>Unauthorized</h2>
        <p>You need to login to see your cart</p>
        <Link to="/">
         Homepage
        </Link>
        <Link to="/login" style={{ marginLeft: "10px" }}>
          Login
        </Link>
        <div class="notfound-social">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-pinterest"></i>
          </a>
          <a href="#">
            <i class="fa fa-google-plus"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage