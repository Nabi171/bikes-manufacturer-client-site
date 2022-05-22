import React from 'react';
import img from '../Banner/banner.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 navbar-bg">
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} class="max-w-sm rounded-lg " />
                <div>
                    <h1 class="text-5xl font-bold">PELVIC MANUFACTURER BIKE ZONE</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Choose</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;



