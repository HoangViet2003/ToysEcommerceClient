const GET_API = ({ page, id, name }) => {
  return {
    getAllProducts: `/product/allproduct?page=${page}`,
    getProductById: `/product/${id}`,
    searchProduct: `/product/search?name=${name}`,
    getCartByUserId: '/cart/getCart',
    getAllProductsWithoutLimit: '/product/allproduct',
  };
};

const POST_API = () => {
  return {
    createProduct: "/product/create",
    login: "/auth/login",
    register: "/auth/register",
    addToCart: '/cart/addToCart',
  };
};

const UPDATE_API = ({id,product_id}) => {
  return {
    updateProduct: `/product/update/${id}`,
    updateQuantity: `/cart/updateQuantity/${product_id}`,
  };
};

const DELETE_API = ( id ) => {
  return {
    deleteProduct: `/product/delete/${id}`,
    deleteProductFromCart: `/cart/delete/${id}`,
    deleteAllProductFromCart: '/cart/deleteAllProductFromCart',
  };
};

export { GET_API, POST_API, UPDATE_API, DELETE_API };
