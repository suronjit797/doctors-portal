import React from 'react';
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
        </div>
    );
};

export default Home;