import React from 'react';
import HomeBanner from './HomeBanner';
import HomeInfo from './HomeInfo';

const Home = () => {
    return (
        <div>
            <div className="p-20">
                <HomeBanner />
                <HomeInfo />
            </div>
        </div>
    );
};

export default Home;