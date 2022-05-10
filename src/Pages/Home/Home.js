import React from 'react';
import HomeAppointment from './HomeAppointment';
import HomeBanner from './HomeBanner';
import HomeContact from './HomeContact';
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
            <HomeContact />
        </div>
    );
};

export default Home;