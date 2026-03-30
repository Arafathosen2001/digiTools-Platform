import React from 'react';

const Tab = ({ selectTab, setSelectTab, selectProductData }) => {
    const handleTabClick = (tab) => {
        setSelectTab(tab);
    }
    // console.log(selectTab)
    // const totalPlayer = use(PromisData);
    return (
        <div className='container py-10'>
            <div className="flex items-center justify-center">
                <button onClick={() => handleTabClick("Products")} className={selectTab === "Products" ? "btn border-r-0 rounded-4xl bg-primary text-white" : "btn border-r-0 rounded-4xl"} >Products</button>
                <button onClick={() => handleTabClick("Cart")} className={selectTab === "Cart" ? "btn border-r-0 rounded-4xl bg-primary text-white" : "btn border-r-0 rounded-4xl"} >Cart({selectProductData.length})</button>
            </div>
        </div>
    );
};

export default Tab;