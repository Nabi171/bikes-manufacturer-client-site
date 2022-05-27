import React, { useState, useEffect } from 'react';
import ShowManageProducts from './ShowManageProducts';

const ManageProducts = () => {
    const [products, setManageProducts] = useState([]);
    useEffect(() => {
        fetch("https://whispering-sea-34909.herokuapp.com/tools")
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, []);
    return (
        <div className="container mx-auto  ">
            <h2 className="text-2xl text-center pb-6 font-bold"> The Company has {products.length} tools</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(pd => <ShowManageProducts
                        pd={pd._id} pd={pd}

                    ></ShowManageProducts>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;