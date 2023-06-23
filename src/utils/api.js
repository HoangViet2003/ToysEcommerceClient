const GET_API = ({ page, id, name,time,keyword }) => {
  return {
    getAllProducts: `/product/allproduct?page=${page}`,
    getProductById: `/product/${id}`,
    searchProduct: `/product/search?name=${name}`,
    getCartByUserId: '/cart/getCart',
    getAllProductsWithoutLimit: '/product/getallproductwithoutlimit',
    getOrderById: "/order/getOrder",
    getAllOrder: "/order/getAllOrder",
    getOrderByTime: `/order/getOrderByTime?date=${time}`,
    searchOrder: `/order/searchOrder`,

  };
};

const POST_API = () => {
  return {
    createProduct: "/product/create",
    login: "/auth/login",
    register: "/auth/register",
    addToCart: '/cart/addToCart',
    createOrder: '/order/create',
  };
};

const UPDATE_API = (product_id) => {
  return {
    updateProduct: `/product/update/${product_id}`,
    updateQuantity: `/cart/updateQuantity/${product_id}`,
    confirmOrder: `/order/confirmOrder/${product_id}`,
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
