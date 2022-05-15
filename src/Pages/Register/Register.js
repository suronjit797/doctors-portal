import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {

    const navigate = useNavigate()
    
    const location = useLocation()
    let from = location?.state?.from?.pathname || "/";

    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        if (data.password === data.ConfirmPassword) {
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName: data.name });
        } else {
            toast.warn("Password doesn't match", { theme: 'colored' })
        }
    }

    useEffect(()=>{
        if(user){
            navigate(from)
        }
    },[navigate, from, user])


    return (
        <div>
            <div className='flex items-center justify-center py-10 flex-col min-h-[calc(100vh-100px)]'>
                <div className='max-w-sm w-full  mx-auto' >
                    <div className="text-center text-2xl mb-6"> Sign Up </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="input input-bordered input-neutral w-full"
                        />
                        <p className='text-red-500'><small>{errors.name?.type === 'required' && "Name is required"}</small></p>

                        <label className="label mt-4">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true, pattern: /^([A-Za-z]|[0-9])/ })}
                            className="input input-bordered input-neutral w-full"
                        />
                        <p className='text-red-500'><small>{errors.email?.type === 'required' && "Email is required"}</small></p>
                        <p className='text-red-500'><small>{errors.email?.type === 'pattern' && "Provide a valid email"}</small></p>

                        <label className="label mt-4">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            className="input input-bordered input-neutral w-full"
                            {...register("password", { required: true })}
                        />
                        <p className='text-red-500'><small>{errors.password && "Password is required"}</small></p>

                        <label className="label mt-4">
                            <span className="label-text font-bold">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            className="input input-bordered input-neutral w-full"
                            {...register("ConfirmPassword", { required: true })}
                        />
                        <p className='text-red-500'><small>{errors.ConfirmPassword && "Confirm Password is required"}</small></p>



                        <button className="btn btn-neutral w-full mt-5"  > Register </button>
                        <p className=' mt-5'> Already have an account? <Link to='/login' className='text-primary'> Login now </Link>  </p>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;