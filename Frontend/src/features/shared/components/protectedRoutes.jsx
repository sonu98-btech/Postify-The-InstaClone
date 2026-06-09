import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'

const ProtectedRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <h1>Loading...</h1>
    }

    console.log(user)
    if (!user) {
        return <Navigate to="/" />
    }


    return children
}

export default ProtectedRoute