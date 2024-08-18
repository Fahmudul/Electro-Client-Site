import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import AllProductPage from "../Pages/AllProductPage/AllProductPage";
import ProductDetails from "../Components/ProductDetails";
import LoginSignUp from "../Pages/LoginSignUp/LoginSignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProductPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/signin-out",
    element: <LoginSignUp />,
  },
]);

export default router;
