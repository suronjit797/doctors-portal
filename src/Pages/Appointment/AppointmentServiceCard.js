import React from 'react';

const AppointmentServiceCard = ({cardInfo}) => {
    const { image, title, description, bg } = cardInfo
    return (
        <div className={`card lg:card-side p-6 text-white shadow-xl ${bg}`}>
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {title} </h2>
                <p> {description} </p>
            </div>
        </div>
    );
};

export default AppointmentServiceCard;