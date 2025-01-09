import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "@/contexts";
import { Fallback, Layout, RequireAuth } from "@/components";

import { ErrorBoundary, NotFound } from "@/pages/Errors";

import Landing from "@/pages/Landing";
import Login from "@/pages/Login";

import { GoogleOAuthProvider,  } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

const Router = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Layout />
        </RequireAuth>
      ),
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "",
          element: <Landing />,
        },
      ],
    },
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthProvider>
        <RouterProvider router={routers} fallbackElement={<Fallback />} />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default Router;
