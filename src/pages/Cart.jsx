import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cartBackground from "../assets/images/cartbackground.jpg";
import { CartItem } from "../components/CartItem";
import useCart from "../hooks/useCart";
import useOrder from "../hooks/useOrder";
import { enqueueSnackbar } from "notistack";
import ErrorPage from "./ErrorPage";
import { useLocation } from "react-router-dom";
import { ProductDetail } from './ProductDetail';

export const Cart = () => {
  const { cart, handleGetCart, totalAmount } = useCart();
  const { handleCreateOrder } = useOrder();
  //calculate total price


  //take product_id and quantity from cart
  const dataOrder = cart.map((item) => {
    return {
      product_id: item.product_id,
      quantity: item.quantity,
    };
  });

  console.log(dataOrder)

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      enqueueSnackbar("Please login to continue", { variant: "error" });
    }
    handleGetCart();
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
                onClick={() => handleCreateOrder(dataOrder)}

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
