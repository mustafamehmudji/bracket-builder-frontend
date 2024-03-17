import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/common/ErrorPage/ErrorPage";
import Navbar from "./components/common/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
