import React from 'react';

const HomeServicesCard = ({ cardInfo }) => {
    const { image, title, description} = cardInfo
    return (
        <div>
            <div className={`card text-center p-6 shadow-md `}>
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title  mx-auto"> {title} </h2>
                    <p> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default HomeServicesCard;