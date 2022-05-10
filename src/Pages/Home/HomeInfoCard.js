import React from 'react';

const HomeInfoCard = ({ cardInfo }) => {
    const { image, title, description, bg  } = cardInfo
    return (
        <div class={`card lg:card-side p-6 text-white shadow-xl ${bg}`}>
            <figure>
                <img src={image} alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title"> {title} </h2>
                <p> {description} </p>
            </div>
        </div>
    );
};

export default HomeInfoCard;