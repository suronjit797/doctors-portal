import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import dayjs from 'dayjs';
import AppointmentBanner from './AppointmentBanner';
import AppointmentService from './AppointmentService';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Spinner from '../Shared/Spinner';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const Appointment = () => {


    const [user, loading, error] = useAuthState(auth);
    const [date, setDate] = useState(new Date());
    const [service, setService] = useState({});

    const dt = dayjs(date).format('MMMM DD, YYYY')
    


    // react query
    const { isLoading, data: services, refetch } = useQuery(['services', dt], () =>
        axios.get(`/availableService?date=${dt}`).then(res => res.data)
    )

    // react hooks form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAppointmentSubmit = data => {
        data.service = service.name
        data.date = dt
        // console.log(da);
        axios.post('/services', data)
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    refetch()
                    return toast.success('Your booking successful', { theme: 'colored' })
                }
                return toast.error('You have already booked this services', { theme: 'colored' })
            })
        setService({})
    }


    if (loading || isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <div className="px-5 md:px-20">
                <AppointmentBanner date={date} setDate={setDate} />
                <AppointmentService services={services} date={dt} setService={setService} />

                {/* modal */}

                {
                    Object.keys(service).length ? (
                        <>
                            <input type="checkbox" id="service-modal" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
                                <div className="modal-box   max-w-xs ">
                                    <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>
                                    <h3 className="font-bold text-lg mb-8">{service.name}</h3>

                                    {/* booking form */}
                                    <form className='text-center' onSubmit={handleSubmit(handleAppointmentSubmit)}>
                                        <input
                                            type="text"
                                            defaultValue={user.displayName}
                                            {...register("name")}
                                            placeholder="Full Name"
                                            className="input input-bordered input-primary w-full mb-5"
                                            required
                                            readOnly
                                        />
                                        <input
                                            type="email"
                                            value={user.email}
                                            {...register("email")}
                                            placeholder="Email"
                                            className="input input-bordered input-primary w-full mb-5"
                                            readOnly
                                            required />
                                        <input
                                            type="number"
                                            {...register("phone")}
                                            placeholder="Phone Number"
                                            className="input input-bordered input-primary w-full mb-5"
                                            required
                                        />

                                        {/* booking time  */}
                                        <select name='booking_slot' {...register("slot")} className="select select-primary mb-5 w-full" required>
                                            {
                                                service && service?.available?.map((slot, index) => (
                                                    <option value={slot} key={index}>{slot}</option>
                                                ))
                                            }
                                        </select>

                                        <label htmlFor="service-modal">
                                            <button className='btn text-white block w-full mx-auto'>Book now</button>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )
                }
            </div>
            <Footer />
        </div >
    );
};

export default Appointment;