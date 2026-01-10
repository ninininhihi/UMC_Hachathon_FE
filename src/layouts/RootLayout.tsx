import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Outlet />
        </Suspense>
    );
};

export default RootLayout;