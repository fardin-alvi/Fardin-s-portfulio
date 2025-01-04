import React from 'react';
import { createBrowserRouter,} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home';
import Project from '../pages/Project';
import ProjectDetails from '../component/projectDetails';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path:"/project",
                element:< Project />
            },
            {
                path: "/project/:id",
                element:<ProjectDetails/>
            }
        ]
    },
]);

export default Routes;