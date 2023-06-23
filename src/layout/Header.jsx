import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Setting from "../assets/images/settings.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  var isAdmin = localStorage.getItem("is_admin");
  const accessToken = localStorage.getItem("accessToken");
  console.log("isAdmin", isAdmin);
  console.log("isAdminlocal", localStorage.getItem("is_admin"));

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_admin");

    window.location.href = "/";
  };

  useEffect(() => {}, [
    accessToken
  ])


  return (
    <div className="z-50 w-full h-30 bg-white border-b-[1px] z-index-1 sticky top-0 border-b-gray-800 font-titleFont ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img
              src={Logo}
              alt="LogoLight"
              className="w-16"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            />
          </div>
        </Link>
        {isAdmin == "true" ? (
          <div className="flex gap-5 items-center">
            <ul className="flex items-center gap-8 cursor-pointer">
              <Link to={"/products-dashboard"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Product
                </li>
              </Link>
              <Link to={"/create-product"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Create Product
                </li>
              </Link>
              <Link to={"/order-dashboard"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Order
                </li>
              </Link>
              <Link to={"/login"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Login
                </li>
              </Link>
              <Link to={"/"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </Link>
            </ul>

            <Link to="/cart">
              <div className="cursor-pointer relative">
                <ShoppingCartIcon />
              </div>
            </Link>
            <Link to={"/login"}>
              <img className="w-8 h-8 round-full" src={Setting} alt="" />
            </Link>
            {/* {UserInfo && <p>{UserInfo.name}</p>} */}
          </div>
        ) : (
          <div className="flex gap-5 items-center">
            <ul className="flex items-center gap-8 cursor-pointer">
              <Link to={"/"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Home
                </li>
              </Link>
              <Link to={"/order"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Order
                </li>
              </Link>
              <Link to={"/login"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Login
                </li>
              </Link>

              <Link to={"/"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </Link>
            </ul>

            <Link to={"/cart"}>
              <div className="cursor-pointer relative">
                <ShoppingCartIcon />
              </div>
            </Link>
            <Link to={"/login"}>
              <img className="w-8 h-8 round-full" src={Setting} alt="" />
            </Link>
            {/* {UserInfo && <p>{UserInfo.name}</p>} */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
