import React from 'react';
import HomeServicesCard from './HomeServicesCard'

import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'



const HomeServices = () => {

    const cardInfo = [
        {
            image: cavity,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            image: fluoride,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            image: whitening,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]

    return (
        <div className='my-20'>
            <div className="text-center">
                <h1 className="text-primary text-xl font-semibold "> Our services </h1>
                <h1 className="text-4xl"> Services We Provide </h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                {
                    cardInfo.map((info, index) => <HomeServicesCard key={index} cardInfo={info} />)
                }
            </div>

        </div>
    );
};

export default HomeServices;