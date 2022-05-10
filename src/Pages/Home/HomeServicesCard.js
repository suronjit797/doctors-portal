import React from 'react';

const HomeServicesCard = ({ cardInfo }) => {
    const { image, title, description} = cardInfo
    return (
        <div>
            <div class={`card text-center p-6 shadow-md `}>
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title  mx-auto"> {title} </h2>
                    <p> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default HomeServicesCard;