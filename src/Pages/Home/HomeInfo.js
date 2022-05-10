import React from 'react';
import HomeInfoCard from './HomeInfoCard';

import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const HomeInfo = () => {

    const homeInfo = [
        {
            title: 'Opening hours',
            image: clock,
            description: 'Lorem Ipsum is simply dummy text of the pri',
            bg:'bg-gradient-to-l from-primary to-secondary'
        },
        {
            title: 'Visit our location',
            image: marker,
            description: 'Lorem Ipsum is simply dummy text of the pri',
            bg:'bg-neutral'
        },
        {
            title: 'Contact us now',
            image: phone,
            description: 'Lorem Ipsum is simply dummy text of the pri',
            bg:'bg-gradient-to-l from-primary to-secondary'
        },
    ]


    return (
        <div className='grid grid-cols-3 gap-4 my-10'>
            {
                homeInfo.map(info=><HomeInfoCard cardInfo={info} />)
            }
        </div>
    );
};

export default HomeInfo;