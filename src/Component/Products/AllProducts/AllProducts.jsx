import React, { use } from 'react';
import Card from './Card';

const AllProducts = ({ PromisData, selectProductData, setSelectProductData }) => {
    const ProductData = use(PromisData);
    // console.log(ProductData);
    return (
        <div className='container grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
            {
                ProductData.map((product) => (
                    <Card key={product.id} product={product} selectProductData={selectProductData} setSelectProductData={setSelectProductData} />
                ))
            }
        </div>
    );
};

export default AllProducts;