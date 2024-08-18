import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Router/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider.jsx";
import ToastContainer from "rsuite/esm/toaster/ToastContainer.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </AuthProvider>
  </StrictMode>
);
