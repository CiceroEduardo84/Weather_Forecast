import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { PageNotFound } from "../pages/PageNotFound";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:name", element: <Home /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
