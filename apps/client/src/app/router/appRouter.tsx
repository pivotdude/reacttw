import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { ProfilePage } from "@/pages/profile/ui/ProfilePage";

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/profile/:name",
      element: <ProfilePage />
    }
  ]);

  return <RouterProvider router={router} />;
}
