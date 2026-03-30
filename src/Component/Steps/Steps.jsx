import React from 'react';
import img1 from "../../assets/user.png"
import Headding2 from '../Hadding/Headding2';

const Steps = () => {
    return (
        <div className=' bg-[#F9FAFC] py-10'>
            <Headding2></Headding2>
            <div className="container grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className=" grid grid-cols-3 justify-end">
                            <p></p>
                            <p></p>
                            <p className='bg-linear-to-r from-primary to-secondary text-white text-center rounded-full'>01</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <img src={img1} alt="User" />

                            <h2 className="text-3xl font-bold">Premium</h2>
                            <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className=" grid grid-cols-3 justify-end">
                            <p></p>
                            <p></p>
                            <p className='bg-linear-to-r from-primary to-secondary text-white text-center rounded-full'>01</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <img src={img1} alt="User" />

                            <h2 className="text-3xl font-bold">Premium</h2>
                            <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className=" grid grid-cols-3 justify-end">
                            <p></p>
                            <p></p>
                            <p className='bg-linear-to-r from-primary to-secondary text-white text-center rounded-full'>01</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <img src={img1} alt="User" />

                            <h2 className="text-3xl font-bold">Premium</h2>
                            <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        </div>

                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Steps;