import React from 'react';

const Rating = () => {
    return (
        <div className=" bg-linear-to-r from-primary to-[#9514FA] py-16">
            <div className="container flex flex-col justify-around items-center text-white sm:flex-row sm:gap-10">
                <div className="">
                    <h2 className='text-5xl font-bold mb-2'>50K+</h2>
                    <p>Active Users</p>
                </div>
                <div className="">
                    <h2 className='text-5xl font-bold mb-2'>200K+</h2>
                    <p>Premium Tools</p>
                </div>
                <div className="">
                    <h2 className='text-5xl font-bold mb-2'>4.9</h2>
                    <p>Rating</p>
                </div>
               
            </div>
        </div>
    );
};

export default Rating;