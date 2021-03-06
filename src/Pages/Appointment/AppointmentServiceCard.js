import React from 'react';

const AppointmentServiceCard = ({ cardInfo, setService }) => {
    const { name, available } = cardInfo

    return (
        <div className={`card  p-6 text-center shadow-md`}>
            <div className='flex flex-col min-h-full'>
                <h2 className="text-primary text-xl mb-6 font-bold"> {name} </h2>

                <div className="mb-4">
                    {
                        available.length ? (
                            <p className="text-green-600"> {available.length} services available </p>
                        ) : (
                            <p className="text-red-500"> No Service Available </p>
                        )
                    }
                </div>

                <label
                    htmlFor="service-modal"
                    className="btn btn-primary text-white mx-auto mt-auto"
                    disabled={!available.length}
                    onClick={() => setService(cardInfo)}
                > Book Appointment </label>
            </div>
        </div>
    );
};

export default AppointmentServiceCard;