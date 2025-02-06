import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from './state';
import Home from './Home';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    }
]);

root.render(
    <Provider> 
       <RouterProvider router={router} />
    </Provider>
);