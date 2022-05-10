import React from 'react';

import bg from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor-small.png'

const HomeAppointment = () => {

    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }


    return (
        <div style={bgStyle} className='px-5 md:px-20'>
            <div className="grid gird-cols-1 md:grid-cols-2 mt-64 items-center">
                <img src={doctor} className='mt-[-100px] hidden lg:block' alt="" />
                <div className='text-base-100 py-16'>
                    <div className="text-primary text-xl"> Appointment </div>
                    <h1 className=" text-4xl my-6"> Make an appointment Today </h1>
                    <p className='my-6'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <button className="btn btn-primary text-white"> Get started </button>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;