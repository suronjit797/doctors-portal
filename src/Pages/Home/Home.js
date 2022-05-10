import React from 'react';
import HomeAppointment from './HomeAppointment';
import HomeBanner from './HomeBanner';
import HomeInfo from './HomeInfo';
import HomeServices from './HomeServices';
import HomeTestimonial from './HomeTestimonial';

const Home = () => {
    return (
        <div>
            <div className="px-20">
                <HomeBanner />
                <HomeInfo />
                <HomeServices />
            </div>
            <HomeAppointment />
            <HomeTestimonial />
        </div>
    );
};

export default Home;