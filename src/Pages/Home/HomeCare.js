import React from 'react';
import treatment from '../../assets/images/treatment.png'

const HomeCare = () => {
    return (
        <div className='my-24'>
            <div class="card md:card-side bg-base-100 shadow-xl gap-6">
                <figure className='w-full md:w-1/2'>
                    <img src={treatment} alt="Album" />
                </figure>
                <div class="card-body d-block w-full md:w-1/2 m-auto">
                    <h2 class="card-title text-3xl md:text-5xl text-neutral font-bold">Exceptional Dental Care, on Your Terms</h2>
                    <p className='my-5'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <div class="card-actions">
                        <button class="btn btn-primary text-white ">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCare;