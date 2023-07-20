import React from 'react'; 
import { Outlet } from 'react-router';
import NavBar from '../Components/Shared/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        < >
            <NavBar />
            <Outlet />
            <Toaster toastOptions={{ 
                duration: 1400,
            }} />
        </>
    );
};

export default Root;