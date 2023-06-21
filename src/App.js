import Test from "./components/Test";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./layout/Header";
import HeaderAdmin from "./layout/HeaderAdmin";
import Footer from "./layout/Footer";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import ProductAdmin from "./pages/admin/ProductAdmin";
import ProductDashboard from "./pages/admin/ProductDashboard";
import ProductAdminUpdate from "./pages/admin/ProductAdminUpdate";
import OrderDashboard from "./pages/admin/OrderDashboard";
import Order from "./pages/Order";
import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";

function App() {

  const Layout = () => {

    return (
      <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const LayoutAdmin = () => {
    return (
      <div>
        <HeaderAdmin />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/admin",
          element: <Test />,
        },
        {
          path: "/admin/create-product",
          element: <ProductAdmin />,
        },
        {
          path: "/admin/product-dashboard",
          element: <ProductDashboard />,
        },
        {
          path: "/admin/update-product/:id",
          element: <ProductAdminUpdate />,
        },
        {
          path: "/admin/order-dashboard",
          element: <OrderDashboard />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/error",
          element: <ErrorPage />,
        },
      ],
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
