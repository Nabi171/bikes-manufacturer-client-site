import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const PurChase = () => {
    const { id } = useParams();
    const [singleTool, setTools] = useState([]);
    useEffect(() => {
        const url = `http://localhost:4000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return (
        <div className=' navbar-bg '>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto bg-card">
                <figure><img src={singleTool.imageLink} className='shadow-xl p-4' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{singleTool.Name}</h2>
                    <p>{singleTool.description}</p>
                    <hr class='text-black' />
                    <p>Price:${singleTool.price}</p>
                    <p>Available:{singleTool.availableQuantity}</p>
                    <p>Minimum Order:{singleTool.minimumOrder}</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PurChase;