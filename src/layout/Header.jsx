import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Setting from "../assets/images/settings.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../hooks/useCart";

function Header() {
  const { cart, handleGetCart } = useCart();

  useEffect(() => {
    handleGetCart(localStorage.getItem("user_id"));
  }, []);

  // },[cart.length]);
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
        <div className="flex gap-5 items-center">
          <ul className="flex items-center gap-8 cursor-pointer">
            <Link to={"/"}>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>

          <Link to="/cart">
            <div className="cursor-pointer relative">
              <ShoppingCartIcon />
              <span className="abslute top-2 left-0">{cart.length}</span>
            </div>
          </Link>
          <Link to={"/login"}>
            <img className="w-8 h-8 round-full" src={Setting} alt="" />
          </Link>
          {/* {UserInfo && <p>{UserInfo.name}</p>} */}
        </div>
      </div>
    </div>
  );
}

export default Header;
