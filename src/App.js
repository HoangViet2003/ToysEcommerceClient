// import "./App.css";
import Test from "./components/Test";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Homepage from './pages/Homepage';
import Register from "./pages/Register";
import Login from "./pages/Login";
import {ProductDetail} from "./pages/ProductDetail"
import {Cart} from "./pages/Cart"
import ErrorPage from "./pages/ErrorPage";
import ProductAdmin from "./pages/admin/ProductAdmin";
import ProductDashboard from "./pages/admin/ProductDashboard";

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
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
}

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
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin",
        element: <Test />,
      },
      {
        path: "/admin/test",
        element: <ProductAdmin />,
      },
      {
        path: "/admin/product-dashboard",
        element: <ProductDashboard />,
      }
    ],
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
]); 

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
