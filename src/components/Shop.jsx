import React from "react";
import ProductCard from "./ProductCard";
import { Pagination } from "@mui/material";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";
import useProduct from "../hooks/useProduct";
import Loading from "../components/Loading";


function Shop() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const {
    product,
    isLoading,
    handleGetProduct,
    totalPage,
    handleSearchProduct,
    search,
  } = useProduct();
  const [name, setName] = React.useState("");

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchProduct(name);
    }
  };

  React.useEffect(() => {
    handleGetProduct(currentPage);
    // handleSearchProduct("toys2")
  }, [currentPage]);

  return (
    <div className="py-10 cursor-pointer">
      {isLoading && <Loading />}
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
        <input
          type="text"
          class="input"
          placeholder="search..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleOnKeyDown}
        />
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
