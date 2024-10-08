import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/Page";
import RootLayout from "@/pages/layout";
import ErrorPage from "@/pages/error";
import Loading from "@/pages/loading";

const router = createBrowserRouter([
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
        element: "<NotFound />",
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
