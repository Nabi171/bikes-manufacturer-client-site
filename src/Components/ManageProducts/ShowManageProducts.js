import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const ShowManageProducts = (props) => {
    const { Name, imageLink, price, description, availableQuantity, minimumOrder, _id } = props.pd;
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("https://whispering-sea-34909.herokuapp.com/tools")
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

    const id = useParams();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete and reload the page after delete?');
        if (proceed) {
            const url = `https://whispering-sea-34909.herokuapp.com/tools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = tools.filter(order => order._id !== id);
                    setTools(rest);
                })
        }
    }


    return (




        <div >
            <div class="card lg:max-w-lg bg-base-100 shadow-xl bg-card">
                <figure class="px-10 pt-10">
                    <img src={imageLink} />

                </figure>

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{Name}</h2>
                    <h4>Price:{price}</h4>
                    <h4>Avaialable:{availableQuantity}</h4>
                    <h4>Minimum Order:{minimumOrder}</h4>
                    <p>{description}</p>
                    <div class="card-actions">
                        <button className='btn btn-primary' onClick={() => handleDelete(_id)}>Delete Tools</button>




                    </div>
                </div>
            </div>

        </div>





    );
};

export default ShowManageProducts;
