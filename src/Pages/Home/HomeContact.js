import React from 'react';

import bg from '../../assets/images/appointment.png'
const HomeContact = () => {

    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }


    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <div style={bgStyle} className='p-16 text-white flex items-center justify-center'>
            <form className='w-full max-w-sm text-center' onSubmit={handleSubmit}>
                <h1 className="text-bold text-xl text-primary"> Contact us </h1>
                <h2 className="text-bold text-4xl mb-8"> Stay connected with us </h2>
                <input type="email" placeholder="Email address" className="input w-full mb-3 text-neutral" />
                <input type="text" placeholder="Subject" className="input w-full mb-3 text-neutral" />
                <textarea placeholder="Your message" className="textarea h-32 w-full mb-3 text-neutral" />

                <button className="btn btn-primary text-white px-16"> Submit </button>

            </form>
        </div>
    );
};

export default HomeContact;