import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from './state';
import { Provider } from 'react-redux';
import Home from './pages/home/Home';
import TaskCategories from './pages/categories/TaskCategories';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    },
    {
        path: "/task-categories",
        Component: TaskCategories
    }
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    
);