import React from 'react';
import Navbar from '../pages/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Footer';

const MainLayout = () => {
    const location = useLocation()
    const path = location.pathname.startsWith('/project')
    return (
        <>
            {!path && <Navbar />}
            <Outlet />
            {!path && <Footer />}
        </>
    );
};

export default MainLayout;