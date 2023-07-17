import React from 'react'; 
import { Outlet } from 'react-router';
import NavBar from '../Components/Shared/Navbar';

const Root = () => {
    return (
        < >
            <NavBar />
            <Outlet/>
        </>
    );
};

export default Root;