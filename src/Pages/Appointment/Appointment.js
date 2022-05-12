import React, {  useState } from 'react';
import Footer from '../Shared/Footer';
import dayjs from 'dayjs';
import AppointmentBanner from './AppointmentBanner';
import AppointmentService from './AppointmentService';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [service, setService] = useState({});

    const dt = dayjs(date).format('MMMM DD, YYYY')


    const handleAppointmentSubmit = event => {
        event.preventDefault()
        setService({})
    }



    return (
        <div>
            <div className="px-5 md:px-20">
                <AppointmentBanner date={date} setDate={setDate} />
                <AppointmentService date={dt} setService={setService} />


                {/* modal */}

                {
                    Object.keys(service).length && (
                        <>
                            <input type="checkbox" id="service-modal" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle backdrop-blur-sm">
                                <div class="modal-box   max-w-xs ">
                                    <label for="service-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="font-bold text-lg mb-8">{service.name}</h3>
                                    <form className='text-center' onSubmit={handleAppointmentSubmit}>
                                        <input type="text" readOnly disabled value={dt} class="input input-bordered input-primary w-full mb-5" required />
                                        <select name='booking_slot' class="select select-primary mb-5 w-full" required>
                                            <option value='' disabled selected>Book the slot</option>
                                            {
                                                service && service?.slots?.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
                                            }
                                        </select>
                                        <input type="text" placeholder="Full Name" class="input input-bordered input-primary w-full mb-5" required />
                                        <input type="number" placeholder="Phone Number" class="input input-bordered input-primary w-full mb-5" required />
                                        <input type="email" placeholder="Email" class="input input-bordered input-primary w-full mb-5" required />

                                        <label for="service-modal">
                                            <button className='btn text-white block w-full mx-auto'>Book now</button>
                                        </label>
                                    </form>

                                </div>
                            </div>
                        </>
                    )
                }


            </div>
            <Footer />
        </div >
    );
};

export default Appointment;