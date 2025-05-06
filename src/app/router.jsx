import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProductListPage} from "../features/product-list/ProductListPage.jsx";
import {ProductDetailsPage} from "../features/product-details/ProductDetailsPage.jsx";
import React from "react";
import MainLayout from "./MainLayout/MainLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <ProductListPage/>
            },
            {
                path: '/product/:id',
                element: <ProductDetailsPage/>
            }
        ]
    }
])

export default function AppRouter() {
    return <>
        <RouterProvider router={router}/>
    </>
}