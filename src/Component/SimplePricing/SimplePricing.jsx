import React from 'react';

const SimplePricing = () => {
    return (
        <div className='container grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
            <div className="relative card bg-base-100 active:bg-primary shadow-sm">
                <div className="card-body">
                    <div className=" absolute top-[-12px] left-14 grid grid-cols-3 justify-end">
                        <p></p>
                        <p className='bg-amber-200 text-black text-center rounded-4xl'>Most Popular</p>
                        <p></p>
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p>Perfect for getting started</p>
                    </div>
                    <span className="text-xl">$0/month</span>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>AI-driven image enhancements</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Seamless cloud integration</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Real-time collaboration tools</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary active:bg-white active:text-black btn-block rounded-4xl">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="relative card bg-base-100 active:bg-primary shadow-sm">
                <div className="card-body">
                    <div className=" absolute top-[-12px] left-14 grid grid-cols-3 justify-end">
                        <p></p>
                        <p className='bg-amber-200 text-black text-center rounded-4xl'>Most Popular</p>
                        <p></p>
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p>Perfect for getting started</p>
                    </div>
                    <span className="text-xl">$0/month</span>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>AI-driven image enhancements</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Seamless cloud integration</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Real-time collaboration tools</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary active:bg-white active:text-black btn-block rounded-4xl">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="relative card bg-base-100 active:bg-primary shadow-sm">
                <div className="card-body">
                    <div className=" absolute top-[-12px] left-14 grid grid-cols-3 justify-end">
                        <p></p>
                        <p className='bg-amber-200 text-black text-center rounded-4xl'>Most Popular</p>
                        <p></p>
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p>Perfect for getting started</p>
                    </div>
                    <span className="text-xl">$0/month</span>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>AI-driven image enhancements</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Seamless cloud integration</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Real-time collaboration tools</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary active:bg-white active:text-black btn-block rounded-4xl">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SimplePricing;