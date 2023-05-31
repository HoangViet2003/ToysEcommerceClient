import React from "react";
import ProductCard from "./ProductCard";
import { Pagination } from "@mui/material";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";
import useProduct from "../hooks/useProduct";

function Shop() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { product, isLoading, handleGetProduct, totalPage } = useProduct();

  React.useEffect(() => {
    handleGetProduct(currentPage);
  }, [currentPage]);

  const image = product.map((item) => {
    return item.images[0];
  });

  console.log(product);

  return (
    <div className="py-10 cursor-pointer">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-3 bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div class="input-container">
        <input type="text" name="text" class="input" placeholder="search..." />
        <span className="icon">
          <SearchIcon />
        </span>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {product.map((item, key) => {
          return <ProductCard product={item} key={key} />;
        })}
      </div>
      <div>
        <Pagination
          count={totalPage}
          size="small"
          style={{ display: "flex", justifyContent: "center" }}
          onChange={(e, page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Shop;
