import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import FirebaseError from './FirebaseError';
import Spinner from './Spinner';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location?.state?.from?.pathname || "/";
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user, from, navigate])

    useEffect(() => {
        if (error) {
            toast.error( FirebaseError(error.message), { theme: 'colored' })
        }
    }, [error])

    if (loading) {
        <Spinner />
    }



    return (
        <>
            <div className="divider my-6">OR</div>
            <button
                className="btn btn-outline btn-neutral w-full"
                onClick={() => signInWithGoogle()}

            >Login with google</button>
        </>
    );
};

export default SocialLogin;