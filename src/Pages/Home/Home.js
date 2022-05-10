import React from 'react';
import HomeAppointment from './HomeAppointment';
import HomeBanner from './HomeBanner';
import HomeInfo from './HomeInfo';
import HomeServices from './HomeServices';

const Home = () => {
    return (
        <div>
            <div className="px-20">
                <HomeBanner />
                <HomeInfo />
                <HomeServices />
            </div>
            <HomeAppointment />
        </div>
    );
};

export default Home;