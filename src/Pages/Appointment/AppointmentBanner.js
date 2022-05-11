import React from 'react';
import Calendar from 'react-calendar';

import banner from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'

const AppointmentBanner = ({ date, setDate }) => {


    const bannerStyle = {
        background: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className='min-h-[80vh] flex items-center justify-center my-6' style={bannerStyle}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className='order-2 lg:order-1'>
                    <Calendar
                        className='mx-auto'
                        onChange={setDate}
                        value={date}
                    />
                </div>
                <div className='order-1 lg:order-2'>
                    <img src={chair} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;