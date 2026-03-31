import React, { use } from 'react';
import Header from './Header';
import Tabs from './Tabs';
import Products from './Products';

const DigitalTools = ({productsResponse}) => {
    const products = use(productsResponse)
    console.log(products);

    return (
        <div className=" my-10 w-full md:w-[75%] mx-auto ">
            <Header/>

            <Tabs/>

            <div className="grid justify-center grid-cols-1 lg:grid-cols-3 gap-5 h-full">
                {
                    products.map(product => <Products product={product} />  )
                }
            </div>
        </div>
    );
};

export default DigitalTools;