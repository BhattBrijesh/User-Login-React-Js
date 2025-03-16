import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: routes,
    },
  ]);
  return <RouterProvider router={route} />;
}
export default App;
