import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProductListPage} from "../features/product-list/ProductListPage.jsx";
import {ProductDetailsPage} from "../features/product-details/ProductDetailsPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductListPage/>
    },
    {
        path: '/product/:id',
        element: <ProductDetailsPage/>
    }
])

export default function AppRouter() {
    return <RouterProvider router={router}/>
}