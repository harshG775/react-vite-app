import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "@/routes/error";
import Loading from "@/routes/loading";
import RootLayout from "@/routes/layout";
import HomePage from "@/routes/page";


import LoginPage from "@/routes/(auth)/login/page";
import NotFound from "@/routes/not-found";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        errorElement: <ErrorPage />,
        loader: Loading,
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
