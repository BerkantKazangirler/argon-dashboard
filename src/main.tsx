import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TablePage } from "./pages/tables.tsx";
import { BillingPage } from "./pages/billing.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { ProfilePage } from "./pages/profile.tsx";
import { SignIn } from "./pages/signin.tsx";
import App from "./App.tsx";
import { SignLayout } from "./components/register/sign-layout.tsx";
import { Register } from "./pages/register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "table",
        element: <TablePage />,
      },
      {
        path: "billing",
        element: <BillingPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <SignLayout />,
    children: [
      {
        path: "sign",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <SignLayout />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
