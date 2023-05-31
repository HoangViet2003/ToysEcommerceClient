import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { CartItem } from "../../components/CartItem";
import cartBackground from "../assets/images/cartbackground.jpg";
import { CartItem } from "../components/CartItem";
import useCart from "../hooks/useCart";
import { enqueueSnackbar } from "notistack";
import ErrorPage from "./ErrorPage";

export const Cart = () => {
  const { cart, handleGetCart, totalAmount } = useCart();
  //calculate total price

  //   const [totalAmount, setTotalAmount] = useState("");
  //   const UserInfo = useSelector((state) => state.bazar.userInfo);
  //   const [payNow, setPayNow] = useState(false);
  //   useEffect(() => {
  //     let price = 0;
  //     productData.map((item) => {
  //       price += item.price * item.quantity;
  //       return price;
  //     });
  //     setTotalAmount(price);
  //   }, [productData]);

  //   const handleCheckout = () => {
  //     if (UserInfo) {
  //       setPayNow(true);
  //     } else {
  //       toast.error("please Sign In to Checkout");
  //     }
  //   };

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      enqueueSnackbar("Please login to continue", { variant: "error" });
    }
    handleGetCart(localStorage.getItem("user_id"));
  },[]);

  return (
    <>
      {localStorage.getItem("accessToken") === null ? (
        <ErrorPage />
      ) : (
        <div>
          <img
            className="w-full h-60 object-cover"
            src={cartBackground}
            alt="cartImg"
          />

          <div className="max-w-screen-xl mx-auto py-20 flex">
            <CartItem totalAmount={totalAmount}/>
            <div className="w-1/3 bg-[#fafafa] py-6 px-4">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">cart totals</h2>
                <p className="flex items-center gap-4 text-base">
                  Subtotal
                  <span className="font-bold text-lg">${totalAmount}</span>
                </p>
                <p className="flex items-start gap-4 text-base">
                  Shipping
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, Veritatis
                  </span>
                </p>
              </div>
              <p className="font-titleFont font-semibold flex justify-between mt-6">
                Total <span className="text-xl font-bold">${totalAmount}</span>
              </p>
              <button
                // onClick={handleCheckout}
                className="text-base text-white w-full py-3 mt-6 hover: bg-gray-800 duration-300"
              >
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
