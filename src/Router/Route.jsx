import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import AllProductPage from "../Pages/AllProductPage/AllProductPage";
import ProductDetails from "../Components/ProductDetails";
import PrivateRoute from "../Router/PriavteRoute";
import LoginSignUp from "../Pages/LoginSignUp/LoginSignUp";
import Underdevelopment from "../Components/Underdevelopment";
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
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/store-locator",
        element: <Underdevelopment />,
      },
      {
        path: "/track-your-order",
        element: <Underdevelopment />,
      },
    ],
  },
  {
    path: "/signin-out",
    element: <LoginSignUp />,
  },
]);

export default router;
