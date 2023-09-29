import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NewEvent from "../pages/newEvent";
import Party from "../pages/party";
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

    {
      path: "/party",
      element: <Party />,
    },
    {
      path: "/party/:id",
      element: <Party />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
