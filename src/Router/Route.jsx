import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import AllProductPage from "../Pages/AllProductPage/AllProductPage";
import ProductDetails from "../Components/ProductDetails";
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
]);

export default router;
