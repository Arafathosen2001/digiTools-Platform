import React from 'react';
import heroImg from '../../assets/banner.png';
import PlayImg from '../../assets/Play.png';

const Hero = () => {
    return (
        <div className='container'>
            <div className="hero min-h-[60vh]">
                <div className="hero-content flex-col lg:flex-row-reverse sm:gap-40">
                    <img
                        src={heroImg}
                        className=" rounded-lg shadow-2xl"
                    />
                    <div className="">
                        <span className="badge badge-soft badge-primary mb-4">
                            <div className="badge badge-primary badge-xs"></div>Only available for Pro users
                        </span>
                        <h1 className="text-5xl font-bold">Supercharge Your <br />Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />

                            Explore Products
                        </p>
                        <button className="btn btn-primary hover:bg-transparent hover:text-black sm:mr-5 rounded-4xl">Explore Products</button>
                        <button className="btn btn-outline hover:bg-primary hover:text-white rounded-4xl"><img src={PlayImg} alt="Play" />Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;