import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className="px-5 md:px-20">
                <AppointmentBanner date={date} setDate={setDate} />
            </div>
        </div>
    );
};

export default Appointment;