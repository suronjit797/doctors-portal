import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from './Spinner';
import {toast} from 'react-toastify'

const RequireAuth = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);




    useEffect(() => {
        if (loading) {
            <Spinner />
        }
    }, [loading])

    useEffect(() => {
        if (error) {
            toast.error(error.message, {theme:'colored'});
        }
    }, [error])

    useEffect(() => {
        if (!user) {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
    }, [user, location])

    return children
};

export default RequireAuth;