import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";

export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
};
