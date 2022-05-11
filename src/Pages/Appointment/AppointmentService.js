import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import AppointmentServiceCard from './AppointmentServiceCard';
import axios from 'axios';


const AppointmentService = ({ dt }) => {
    const date = dayjs(dt).format('MMMM DD, YYYY')
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('service.json')
            .then(res => setServices(res.data))
    }, [])

    return (
        <div>
            <h2 className="text-center text-primary text-xl my-10 md:my-20 font-bold"> Available Appointments on {date} </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-10'>
                {
                    services.map(info => <AppointmentServiceCard key={info._id} cardInfo={info} />)
                }
            </div>
        </div>
    );
};

export default AppointmentService;