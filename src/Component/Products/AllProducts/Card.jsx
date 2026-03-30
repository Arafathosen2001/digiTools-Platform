import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ product, selectProductData, setSelectProductData }) => {
    const [ProductData, setProductData] = useState(false);
    const { name, price, description, features, period, tag, icon } = product;
    const isAlreadyAdded = selectProductData.filter(p => p.id === product.id);
    const handleSubscribe = (product) => {
        if (!isAlreadyAdded.length) {
            setSelectProductData([...selectProductData, product]);
        } else {
            toast.error("Product is already in the cart!");
            return;
        }
        setProductData(true);
        toast.success("Product added to cart!");
    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <div className=" flex-1">
                    <button className={`btn btn-sm text-white float-right ${tag === 'Popular' && 'btn btn-sm float-right bg-purple-500 '} ${tag === 'New' && 'btn btn-sm float-right bg-primary '} ${tag === 'Best Seller' && 'btn btn-sm float-right bg-amber-300 '}`}>{tag}</button>
                    <div className="">
                        <div className="avatar">
                            <div className="w-10 rounded-full bg-gray-200 p-2">
                                <img src={icon} alt={name} />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p>{description}</p>
                    </div>
                    <span className="text-xl">${price}/{period}</span>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="mt-6">
                    <button onClick={() => handleSubscribe(product)} className={`btn btn-primary ${ProductData ? 'btn-success' : ''} btn-block rounded-4xl`}>{ProductData ? 'Subscribed' : 'Subscribe Now'}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;