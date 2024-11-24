import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";

/**
 * Initializes and returns a browser router configuration.
 *
 * This router is configured with a single route that maps the root path ("/")
 * to the Home component. It uses the createBrowserRouter function to create
 * the router instance.
 *
 * @returns {Router} A browser router configured with defined routes.
 */
export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
};
