import { createBrowserRouter, Navigate } from 'react-router-dom'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'
import Home from "./features/post/pages/Home"
import Profile from './features/post/pages/Profile'
import Search from './features/post/pages/Search'
import Create from './features/post/pages/Create'
import ProtectedRoute from './features/shared/components/protectedRoutes'
import Follow from './features/follow/pages/Follow'
export const router = createBrowserRouter([
    {
        path: '/home',
        element: <ProtectedRoute><Home /></ProtectedRoute>
    },

    {
        path: '/',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>
    },
    {
        path: '/search',
        element: <ProtectedRoute><Search /></ProtectedRoute>
    },
    {
        path: '/create',
        element: <ProtectedRoute><Create /></ProtectedRoute>
    },
    {
        path: '*',
        element: <Navigate to='/' replace />
    },
    {
        path: '/follow',
        element: <ProtectedRoute><Follow /></ProtectedRoute>
    }
])