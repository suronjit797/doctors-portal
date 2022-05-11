import React from 'react';

const AppointmentServiceCard = ({ cardInfo }) => {
    const { name, slots } = cardInfo
    console.log(cardInfo);
    return (
        <div className={`card  p-6 text-center shadow-md`}>
            <div className='flex flex-col min-h-full'>
                <h2 className="text-primary text-xl mb-6 font-bold"> {name} </h2>

                <div className="mb-4">
                    {
                        slots.map((slot, index) => (
                            <p className='mb-2'> {slot} </p>
                        ))
                    }
                </div>

                <button
                    className="btn btn-primary text-white mx-auto mt-auto"
                    disabled={!slots.length}
                > Book Appointment </button>
            </div>
        </div>
    );
};

export default AppointmentServiceCard;