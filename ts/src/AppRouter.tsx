import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "src/app/error";
import Loading from "src/app/loading";
import RootLayout from "src/app/layout";
import HomePage from "src/app/page";

import LoginPage from "src/app/(auth)/login/page";
import NotFound from "src/app/not-found";

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
