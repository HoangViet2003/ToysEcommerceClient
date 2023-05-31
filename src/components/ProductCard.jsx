import React from "react";
import "../assets/css/button.css";
import { useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";

function ProductCard({ product }) {
  const navigate = useNavigate();
  // const { handleGetProductById, productDetail } = useProduct();

  const handleDetails = () => {
    navigate(`/product/${product._id}`, {
      state: {
        productDetail: product,
      },
    });
  };

  return (
    <div className="group relative">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          onClick={handleDetails}
          className=" h-full w-full object-cover group-hover:scale-110 duration-500"
          src={`http://localhost:8000/images/${product.images[0]}`}
          alt=""
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div>
          <h2
            className="font-arial text-xl font-bold "
            style={{ textAlign: "left" }}
          >
            {product.name}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <p>{product.category[0]}</p>
          <div className="flex gap-2 justify-end">
            <p className="line-through text-gray-500">$200</p>
            <p className="font-semibold">${product.price}</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          {/* <button className="bg-light-gray text-blue-600 hover:text-blue-400">
            add To Cart
          </button> */}
          <button class="button">
            <span>Add to cart</span>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs> </defs>{" "}
                <g id="cart">
                  <circle r="1.91" cy="20.59" cx="10.07" class="cls-1"></circle>{" "}
                  <circle r="1.91" cy="20.59" cx="18.66" class="cls-1"></circle>{" "}
                  <path
                    d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                    class="cls-1"
                  ></path>{" "}
                  <polyline
                    points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                    class="cls-1"
                  ></polyline>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="top-2 right-2 absolute">
          {/* {isNew && ( */}
          <p className="bg-black  text-white font-semibold px-6 py-1">Sale</p>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
