import React, { useState } from 'react';
import { useForm } from "react-hook-form";

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
            <div className='flex items-center justify-center flex-col min-h-[calc(100vh-100px)]'>
                <div className='max-w-sm w-full  mx-auto' >
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true, pattern: /^([A-Za-z]|[0-9])/ })}
                            className="input input-bordered input-neutral w-full"
                        />
                        <p className='text-red-500'><small>{errors.email?.type === 'required' && "First name is required"}</small></p>
                        <p className='text-red-500'><small>{errors.email?.type === 'pattern' && "Provide a valid email"}</small></p>

                        <label className="label mt-4">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            className="input input-bordered input-neutral w-full"
                            {...register("password", { required: true })}
                        />
                        <p className='text-red-500'><small>{errors.password && "Last name is required"}</small></p>

                        <label for="forget-modal" class="cursor-pointer modal-button"><small> Forgot password? </small></label>
                        <input type="checkbox" id="forget-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <label for="forget-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 class="font-bold text-lg">Do you really want to forgot your password?</h3>
                                <p class="pt-4">Provide you email</p>
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
                    </form>
                    <div class="divider my-12">OR</div>
                    <button class="btn btn-outline btn-neutral w-full">Login with google</button>
                </div>


            </div>


        </div>
    );
};

export default Login;