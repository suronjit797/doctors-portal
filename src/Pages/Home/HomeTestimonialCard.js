import React from 'react';

const HomeTestimonialCard = ({ item }) => {
    const { image, description, name, address } = item
    return (
        <div className=' shadow-md'>
            <div className="card-body">
                <p> {description} </p>
            </div>
            <div class="card lg:card-side bg-base-100">
                <figure>
                    <img class="w-16 rounded-full ring ring-primary ring-offset-base-100 m-3" src={image} alt="Album" />
                </figure>

                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{address}</p>

                </div>
            </div>
        </div>
    );
};

export default HomeTestimonialCard;