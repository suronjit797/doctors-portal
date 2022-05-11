import React from 'react';
import dayjs from 'dayjs';
import AppointmentServiceCard from './AppointmentServiceCard';


const AppointmentService = ({ dt }) => {
    const date = dayjs(dt).format('MMMM DD, YYYY')

    const homeInfo = []
    return (
        <div>
            <h2 className="text-center text-primary text-xl my-10 md:my-20 font-bold"> Available Appointments on {date} </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                {
                    homeInfo.map(info => <AppointmentServiceCard cardInfo={info} />)
                }
            </div>
        </div>
    );
};

export default AppointmentService;