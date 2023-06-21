import React, { useEffect, useState } from "react";
import { useLocation,useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/bazaarSlice";
// import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import useCart from "../hooks/useCart";


export const ProductDetail = () => {
  //   const dispatch = useDispatch();

  //   const [details, setDetails] = useState({});
    let [baseQty, setBaseQty] = useState(1);
    const { handleAddToCart } = useCart();

  //   const location = useLocation();
  //   useEffect(() => {
  //     setDetails(location.state.item);
  //   }, []);

    const location = useLocation();
    const { productDetail } = location.state;
    const data = {
        product_id:productDetail._id,
        quantity:baseQty
    }






  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={`https://drippyecommerce.onrender.com/images/${
              productDetail.images[0]
                ? productDetail.images[0]
                : "https://image.lexica.art/md2/fcda0b2a-edf8-4d28-89d0-7fdd341d6078"
            }`}
            alt=""
            loading="lazy"
          />
          {/* <div className="w-full h-[550px] object-cover" style={{backgroundImage: `url(${product.images[0]})`}}></div> */}
          <div className="absolute top-2 right-2">
            <p className="bg-black text-white px-8 py-1">Sale</p>
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-3xl fot-semibold">{productDetail.name}</h2>
            <div className="flex items-center gap-4 mt-3">
              <div className="line-through font-base text-gray-500">$200</div>
              <div className="text-2xl font-medium text-gray-900">
                ${productDetail.price}
              </div>
            </div>
          </div>
          <div className="flex align-center gap-3 flex-start">
            <div>
              {/* for(let i = 0; i < product.rating; i++){
                    <StarIcon />
                } */}

              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-sm mt-1 text-gray-500">
              {/* ({details.rating} Customer reviews) */}
            </p>
          </div>
          <p className="text-base text-gray-500 mt-3">
            {productDetail.category}
          </p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-base text-black">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() => setBaseQty(baseQty > 1 ? baseQty - 1 : 1)}
                  className="border text-black h-5 font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 text-black font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              //   onClick={() =>
              //     dispatch(
              //       addToCart({
              //         _id: details._id,
              //         title: details.title,
              //         image: details.image,
              //         price: details.price,
              //         quantity: baseQty,
              //         description: details.description,
              //       })
              //     ) && toast.success(`${details.title} is added`)
              //   }
              onClick={() => handleAddToCart(data)}
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add To Cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Avaiable:
            <span className="font-medium capitalize">{productDetail.quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
