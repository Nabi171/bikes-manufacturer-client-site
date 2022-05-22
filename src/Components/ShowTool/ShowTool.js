import React from 'react';
import '../ShowTool/ShowTool.css'
const ShowTool = (props) => {
    const { Name, imageLink, price, description, availableQuantity, minimumOrder } = props.tool;
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
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowTool;
