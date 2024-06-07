import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/pages/home";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    }
  ]);

  return <RouterProvider router={router} />;
}
