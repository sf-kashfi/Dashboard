
import { lazy, Suspense } from 'react';
import type { ComponentType, FC } from 'react';
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import LoadingSpinner from '../components/LoadingSpinner';
// guards
import GuestGuard from '../guards/GuestGuard';

// ----------------------------------------------------------------------



const Loadable = <P extends object>(Component: ComponentType<P>): FC<P> => (props: P) => {
    const { pathname } = useLocation();

    return (
        <Suspense fallback={< LoadingSpinner isDashboard={pathname.includes('/')} />}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Navigate to="/auth/login" />,
        },
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: (
                        <GuestGuard>
                            <Login />
                        </GuestGuard>
                    ),
                },
                {
                    path: 'register',
                    element: (
                        <GuestGuard>
                            <Register />
                        </GuestGuard>
                    ),
                },
            ],
        },])
}



// IMPORT COMPONENTS
const Login = Loadable(lazy(() => import('../pages/auth/login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));

// Authentication

// Dashboard
