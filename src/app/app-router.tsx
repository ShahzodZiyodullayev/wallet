import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
// import { TestWallet } from "@/pages/test";

export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "/w",
    //   element: <TestWallet />,
    // },
  ]);
};
