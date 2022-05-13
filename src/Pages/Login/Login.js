import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const [forgotEmail, setForgotEmail] = useState('')

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    const forgotPassword = () => {
        console.log(forgotEmail);



        setForgotEmail('')
    }


    return (
        <div>
            <div className='flex items-center justify-center py-10 flex-col min-h-[calc(100vh-100px)]'>
                <div className='max-w-sm w-full  mx-auto' >
                    <div className="text-center text-2xl mb-6"> Login </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true, pattern: /^([A-Za-z]|[0-9])/ })}
                            className="input input-bordered input-neutral w-full"
                        />
                        <p className='text-red-500'><small>{errors.email?.type === 'required' && "Name is required"}</small></p>
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

                        <label htmlFor="forget-modal" className="cursor-pointer modal-button"><small> Forgot password? </small></label>
                        <input type="checkbox" id="forget-modal" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <label htmlFor="forget-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="font-bold text-lg">Do you really want to forgot your password?</h3>
                                <p className="pt-4">Provide you email</p>
                                <input
                                    type="email"
                                    className="input input-bordered input-neutral w-full"
                                    name="email"
                                    id="email"
                                    value={forgotEmail}
                                    onChange={e => setForgotEmail(e.target.value)}
                                />
                                <div className="btn mt-4" onClick={forgotPassword} > Submit </div>
                            </div>
                        </div>

                        <button className="btn btn-neutral w-full mt-5"  > Login </button>

                        <p className=' mt-5'> New is doctors portal? <Link to='/register' className='text-primary'> create a new account </Link>  </p>

                    </form>
                    <SocialLogin />
                </div>


            </div>


        </div>
    );
};

export default Login;