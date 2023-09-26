import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NewEvent from "../pages/newEvent";
import Occasion from "../pages/newEvent/steps/Occasion";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new",
      element: <NewEvent />,
      children: [
        {
          path: "1",
          element: <Occasion />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
