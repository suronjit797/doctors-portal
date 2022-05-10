import React from 'react';
import HomeTestimonialCard from './HomeTestimonialCard';

import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'

const HomeTestimonial = () => {

    const testimonialCard = [
        {
            image: people1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California'
        },
        {
            image: people2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California'
        },
        {
            image: people3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California'
        }
    ]

    const quoteStyle = {
        backgroundImage:  `url(${quote})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: '190px'
    }



    return (
        <div className='mx-14 my-20' style={quoteStyle} >
            <div className="text-primary text-xl text-bold"> Testimonial </div>
            <h1 className="text-4xl"> What Our Patients Says </h1>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-10 px-8 mt-32'>
                {
                    testimonialCard.map(item => <HomeTestimonialCard item={item} />)
                }
            </div>
        </div>
    );
};

export default HomeTestimonial;