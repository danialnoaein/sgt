import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NewEvent from "../pages/newEvent";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new",
      element: <NewEvent />,
    },

    {
      path: "/new/:id",
      element: <NewEvent />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
