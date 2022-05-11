import React from 'react';

const AppointmentServiceCard = ({ cardInfo, setService }) => {
    const { name, slots } = cardInfo
    return (
        <div className={`card  p-6 text-center shadow-md`}>
            <div className='flex flex-col min-h-full'>
                <h2 className="text-primary text-xl mb-6 font-bold"> {name} </h2>

                <div className="mb-4">
                    {
                        slots.length ? (
                            slots.map((slot, index) => (
                                <p className='mb-2'> {slot} </p>
                            ))
                        ):(
                            <p className="text-red-500"> No Service Available </p>
                        )
                    }
                </div>

                <label
                    for="service-modal"
                    className="btn btn-primary text-white mx-auto mt-auto"
                    disabled={!slots.length}
                    onClick={() => setService(cardInfo)}
                > Book Appointment </label>
            </div>
        </div>
    );
};

export default AppointmentServiceCard;