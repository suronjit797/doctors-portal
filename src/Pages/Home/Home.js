import React from 'react';
import HomeAppointment from './HomeAppointment';
import HomeBanner from './HomeBanner';
import HomeCare from './HomeCare';
import HomeContact from './HomeContact';
import HomeInfo from './HomeInfo';
import HomeServices from './HomeServices';
import HomeTestimonial from './HomeTestimonial';

const Home = () => {
    return (
        <div>
            <div className="px-5 md:px-20">
                <HomeBanner />
                <HomeInfo />
                <HomeServices />
                <HomeCare />
            </div>
            <HomeAppointment />
            <HomeTestimonial />
            <HomeContact />
        </div>
    );
};

export default Home;