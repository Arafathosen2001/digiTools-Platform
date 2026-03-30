import React from 'react';
import { toast } from 'react-toastify';

const CatrProduct = ({ selectProductData, setSelectProductData }) => {
    const handelCheckout = () => {
        toast("Checkout successful!");
        setSelectProductData([]);
    }
    const handleRemove = (product) => {
        setSelectProductData(selectProductData.filter(p => p.id !== product.id));
        toast.error("Product removed from cart!");
    }
    return (
        <div className='container grid gap-3 grid-cols-1 p-10 shadow-2xl rounded-2xl'>

            {selectProductData.length === 0 ? (
                <h1 className='font-semibold text-2xl'>Your shopping cart is empty.</h1>
            ) : (
                <>
                    {selectProductData.map((product) => (
                        <div className=" flex items-center justify-between bg-gray-100 p-4 rounded-4xl" key={product.id}>
                            <div className="flex items-center gap-4">
                                <img className='w-14 bg-white rounded-full' src={product.icon} alt={product.name} />
                                <div className="">
                                    <h3 className="text-lg font-bold">{product.name}</h3>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="">
                                <button onClick={() => handleRemove(product)} className="btn btn-sm btn-error">Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between">
                        <p className="font-semibold">Total</p>
                        <p className="font-bold">${selectProductData.reduce((total, product) => total + (product.price), 0).toFixed(2)}</p>
                    </div>
                    <button onClick={handelCheckout} className="btn btn-primary rounded-4xl">Proceed to Checkout</button>
                </>
            )}
        </div>
    );
};

export default CatrProduct;