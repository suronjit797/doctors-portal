import React from 'react';

import banner from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'


const bannerStyle = {
    background: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const HomeBanner = () => {
    return (
        <div className='min-h-screen flex items-center my-6' style={bannerStyle}>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className='order-2 lg:order-1'>
                    <h1 className="text-3xl md:text-5xl leading-snug text-neutral font-bold"> Your New Smile Starts Here </h1>
                    <p className='my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                    <button className='btn btn-primary text-white' >
                        Get starts
                    </button >
                </div>
                <div className='order-1 lg:order-2'>
                    <img src={chair} alt="" />
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;